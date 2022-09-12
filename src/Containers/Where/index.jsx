import React, { useState } from 'react';
import TopBar from './../../Components/TopBar';
import { MARKERS } from './../../Constants/mockedData'
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import {ReactComponent as Phone} from './../../Assets/phone.svg';
import {ReactComponent as Address} from './../../Assets/address.svg';
import {ReactComponent as Close} from './../../Assets/arrow.svg';

import { Drawer } from '@mui/material';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

import './index.scss'

const Where = () => {
const [openDrawer, setOpenDrawer] = useState(false);
const [phoneDrawer, setPhoneDrawer] = useState('');
const [addressDrawer, setAdressDrawer] = useState('');
const [imgDrawer, setImgDrawer] = useState('');
const [nameDrawer, setNameDrawer] = useState('');

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

const handlerDrawer = (name, url, phone, address) => {
  setOpenDrawer(true)
  setNameDrawer(name)
  setImgDrawer(url)
  setPhoneDrawer(phone)
  setAdressDrawer(address)
}

    return (
    <> 
      <TopBar/>
      <MapContainer center={[-34.9, -56.2]} zoom={13} className="where">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {MARKERS.map(({lng, lat, name, url, address, phone}) => {
          console.log(name, lng, lat)
          return(
            <Marker key={lng, lat}
              eventHandlers={{
                click: () => {
                  handlerDrawer(name, url, phone, address)
                },
              }} 
              position={[lat, lng]} 
              icon={markerIcon}
            />
          )
        })}
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
              style={{marginRight: '10px'}}
              onClick={() => setOpenDrawer(false)}
            />
          </div>
          <img src={imgDrawer} className="where__preview-image" />
            <div className="where__preview-name">
            {nameDrawer}
          </div>
          <div className="where__preview-info">
            <Phone className="where__preview-icon"/>
            {phoneDrawer}
          </div>
          <div className="where__preview-info">
            <Address className="where__preview-icon"/>
            {addressDrawer}
          </div>
        </div>
      </Drawer>
    </>
  )
}

export default Where;
