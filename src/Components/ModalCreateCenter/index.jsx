/* eslint-disable no-undef */
import React, { useState, useEffect } from "react"
import Modal from "react-modal"
import { ReactComponent as Cross } from './../../Assets/cross-white.svg';
import { ReactComponent as Picture } from './../../Assets/picture.svg';
import { ReactComponent as Plus } from './../../Assets/plus-md.svg';
import PropTypes from 'prop-types';
import './index.scss'

import {
  postCenters,
} from '../../Api/index.js';
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker
} from "react-leaflet";

const ModalCreateCenter = ({ openModal, setOpenModal, markers, setMarkers }) => {
  const [image, setImage] = useState(null);
  const [imageView, setImageView] = useState(null);
  const [nombre, setNombre] = useState(null);
  const [error, setError] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState('')

  useEffect(() => {
    setImageView(image ? URL.createObjectURL(image) : null)
  }, [image])

  const handlerPostCenter = (nombre, imagen, latitud, longitud) => {
    postCenters(
      nombre,
      imagen,
      latitud,
      longitud
    ).then((res) => {
      markers.push(res)
      const modMarker = [...markers]
      setMarkers(modMarker)
    }).catch((err) => {
      setError(err)
    })
  }

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

  const CreateMarker = () => {
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

  return (
    <Modal
      isOpen={openModal}
      className="center__create"
      overlayClassName="center__modal-overlay"
    >
      <Cross className="center__modal-cross" onClick={() => setOpenModal(!openModal)} />
      <div className="center__create-flex-column">

        <div className="center__create-flex">
          <div className="center__create-img">
            <div className="center__create-text">
              Imagen del centro
            </div>
            {imageView ?
              (<img
                src={imageView}
                className="center__create-image-view"
                alt="Foto de perfil"
              />)
              : (<div className="center__create-image-view" style={{ paddingTop: "10px" }}>
                <Picture />
              </div>)
            }
            <label
              className="center__create-image-add"
              htmlFor="upload"
              style={{ zIndex: 2 }}
            >
              <div className="center__create-image-label">
                <Plus />
              </div>
            </label>
            <input
              id="upload"
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              style={{ display: 'none' }}
            />
          </div>
          <div className="center__create-description">
            <div className="center__create-text">
              Nombre del centro
            </div>
            <input
              value={nombre}
              onChange={(x => setNombre(x.target.value))}
              className="center__create-input"
              placeholder="Nombre"
            />
          </div>
          <div className="center__create-text">
            Ubicacion del centro
          </div>
          <div >
            <MapContainer
              center={[-34.9, -56.2]}
              zoom={10}
              className="center__create-map"
            >
              <CreateMarker />
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </MapContainer>
          </div>
        </div>
      </div>
      <div className="center__create-error">
        {error}
      </div>
      <div className="center__create-buttons">
        <button
          className="center__create-buttons-ok"
          onClick={() => handlerPostCenter(nombre, imageView, latitud, longitud)}
        >
          Crear
        </button>
        <button
          className="center__create-buttons-cancel"
          onClick={() => setOpenModal(!openModal)}
        >
          Cancelar
        </button>
      </div>
      <div
        className="center__create-preview"
      >
      </div>
    </Modal>
  )
}

ModalCreateCenter.propTypes = {
  openModal: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func.isRequired,
  markers: PropTypes.object.isRequired,
  setMarkers: PropTypes.func.isRequired,

}


export default ModalCreateCenter;