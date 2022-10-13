/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import TopBar from './../../Components/TopBar';
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import { ReactComponent as Close } from './../../Assets/arrow.svg';
import { ReactComponent as Edit } from './../../Assets/edit.svg';
import { ReactComponent as Log } from './../../Assets/log.svg';
import { ReactComponent as Plus } from './../../Assets/plus.svg';
import { ReactComponent as Graft } from './../../Assets/graft.svg';
import { format, parseISO } from 'date-fns';
import ModalCreateCenter from '../../Components/ModalCreateCenter';

import {
  getCenters,
  getUser,
  getRecolector,
  editCenter,
  getDonationInCenter,
  getManageOfCenter
} from '../../Api/index.js';

import { Drawer } from '@mui/material';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

import './index.scss'

const Where = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [imgDrawer, setImgDrawer] = useState('');
  const [nameDrawer, setNameDrawer] = useState('');
  const [idDrawer, setIdDrawer] = useState('');
  const [longitudDrawer, setLongitudDrawer] = useState('');
  const [latitudDrawer, setLatitudDrawer] = useState('');
  const [user, setUser] = useState('');
  const [markers, setMarkers] = useState([])
  const [optionsData, setOptionsData] = useState('')
  const [nameEdit, setNameEdit] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const markerIcon = new L.Icon({
    iconUrl: require('./marker.png'),
    iconRetinaUrl: require('./marker.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [40, 40],
    className: 'leaflet-div-icon'
  });

  const markerIconSelected = new L.Icon({
    iconUrl: require('./markerSelected.png'),
    iconRetinaUrl: require('./markerSelected.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [40, 40],
    className: 'leaflet-div-icon'
  });

  useEffect(() => {
    getCenters().then((response) => {
      setMarkers(response.data)
    })
    getUser(localStorage.getItem("ID")).then((response) => {
      if (response.data.rol == "recolector") {
        getRecolector(localStorage.getItem("ID")).then((response) => {
          setUser(response.data.recolector)
        })
      } else {
        setUser(response.data)
      }
    })
  }, [])

  const handlerDrawer = (name, url, ID, latitud, longitud) => {
    setOpenDrawer(true)
    setNameDrawer(name)
    setImgDrawer(url)
    setIdDrawer(ID)
    setLongitudDrawer(longitud)
    setLatitudDrawer(latitud)
  }

  const handlerEditCenterCall = () => {
    let position;
    if (localStorage.getItem('selectedPosition')) {
      position = JSON.parse(localStorage.getItem('selectedPosition'))
      getCenters().then((response) => {
        setMarkers(response.data)
      })
    } else {
      position = [latitudDrawer, longitudDrawer]
    }

    editCenter(
      idDrawer,
      nameEdit,
      null,
      position[0],
      position[1],
    ).then((res) => {
      markers.splice(markers.findIndex(x => x.ID = idDrawer), 1)
      markers.push(res.data)
      const modMarker = [...markers]
      setMarkers(modMarker)
    })
  }

  const CreateMarker = () => {
    const [selectedPosition, setSelectedPosition] = useState('')

    useMapEvents({
      click(e) {
        setSelectedPosition([
          e.latlng.lat,
          e.latlng.lng
        ]);
        localStorage.setItem("selectedPosition", JSON.stringify([
          e.latlng.lat,
          e.latlng.lng
        ]))
      },
    })

    return (
      selectedPosition ?
        <Marker
          key={selectedPosition[0]}
          position={selectedPosition}
          interactive={false}
          icon={markerIcon}
        />
        : null
    )

  }

  const handlerEditCenter = () => {
    setOptionsData(null)
    setOptionsData(
      <>
        <div className='where__edit-text'>
          Cambiar Nombre:
        </div>
        <input
          className="where__edit-input"
          placeholder="Ingrese el nuevo nombre del centro"
          value={nameEdit}
          onChange={(x) => [setNameEdit(x.target.value)]}
        />
        <div className='where__edit-text'>
          Cambiar Ubicacion:
        </div>
        <MapContainer
          center={[latitudDrawer, longitudDrawer]}
          zoom={15}
          className="where__mapEdit"
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <CreateMarker />
          <Marker
            position={[latitudDrawer, longitudDrawer]}
            icon={markerIconSelected}
          />
        </MapContainer>
        <div className="where__edit-buttons">
          <button className="where__edit-buttons-ok" onClick={() => [handlerEditCenterCall(nameEdit), setOpenDrawer(false), setOptionsData(null)]}>
            Editar
          </button>
          <button className="where__edit-buttons-cancel" onClick={() => [setOpenDrawer(false), setOptionsData(null)]}>
            Cancelar
          </button>
        </div>
      </>
    )
  }

  const handlerDonations = () => {
    setOptionsData(null)
    getDonationInCenter(idDrawer).then((res) => {
      setOptionsData(
        res.data.map(({ donacion }) => (
          <div className="where__table" key={donacion.ID}>
            <div className="where__table-column">
              Peso
              <div className="where__table-value">
                {donacion.cantidad} g
              </div>
            </div>
            <div className="where__table-column">
              Tipo
              <div className="where__table-value">
                {donacion.tipo}
              </div>
            </div>
            <div className="where__table-column">
              fecha
              <div className="where__table-value">
                {format(parseISO(donacion.fecha), 'dd-MM-yyyy')}
              </div>
            </div>
          </div>
        ))
      )
    })
  }


  const handlerManage = () => {
    setOptionsData(null)
    getManageOfCenter(idDrawer).then((res) => {
      console.log(res.data)
      setOptionsData(
        res.data.map(({ LugarRecoleccion, accion, recolector }) => (
          <div className="where__table" key={[recolector.usuario.ID, LugarRecoleccion]}>
            <div className="where__table-column">
              {console.log(recolector)}
              {console.log(recolector.usuario)}

              Nombre
              <div className="where__table-value">
                {recolector.usuario.nombre}
              </div>
            </div>
            <div className="where__table-column">
              Apellido
              <div className="where__table-value">
                {recolector.usuario.apellido}
              </div>
            </div>
            <div className="where__table-column">
              Accion
              <div className="where__table-value">
                {accion}
              </div>
            </div>
          </div>
        )
        )
      )
    })
  }


  return (
    <>
      {user.rol === "administrador" && (
        <div className='where__add' onClick={() => {setOpenModal(!openModal)}}>
          <Plus />
        </div>
      )}
      <div className="where__modal">
        <ModalCreateCenter 
          openModal={openModal}
          setOpenModal={setOpenModal}
          markers={markers}
          setMarkers={setMarkers}
        />
      </div>
      <TopBar />
      <MapContainer center={[-34.9, -56.2]} zoom={10} className="where">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map(({ longitud, latitud, nombre, imagen, ID }) => (
          <Marker key={[longitud, latitud]}
            eventHandlers={{
              click: () => {
                handlerDrawer(nombre, imagen, ID, latitud, longitud)
              },
            }}
            position={[latitud, longitud]}
            icon={markerIcon}
          />
        ))}
      </MapContainer>
      <Drawer
        className="where__preview"
        open={openDrawer}
        anchor="left"
        variant="persist"
      >
        <div className="where__preview">
          <div className="where__preview-header">
            <Close
              style={{ marginRight: '10px' }}
              onClick={() => [setOpenDrawer(false), setOptionsData(null)]}
            />
          </div>
          <img src={imgDrawer} className="where__preview-image" />
          <div className="where__preview-name">
            {nameDrawer}
          </div>
          {user.lugarRecoleccion == idDrawer ? (
            <div className="where__preview-options">
              <div className="where__preview-options" onClick={handlerEditCenter}>
                <Edit />
              </div>
              <div className="where__preview-options" onClick={handlerDonations}>
                <Graft />
              </div>
              <div className="where__preview-options" onClick={handlerManage}>
                <Log />
              </div>
            </div>
          ) : (null)}
          <div className='where__preview-box'>
            {optionsData}
          </div>
        </div>
      </Drawer>
    </>
  )
}

export default Where;
