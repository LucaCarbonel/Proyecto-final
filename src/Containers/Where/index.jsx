import React, { useState } from 'react';
import TopBar from './../../Components/TopBar';
import { MARKERS } from './../../Constants/mockedData'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

import './index.scss'

const Where = () => {
const [openDrawer, setOpenDrawer] = useState(false);
const [latDrawer, setLatDrawer] = useState('');
const [longDrawer, setLongDrawer] = useState('');
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
    iconSize: [20, 20],
    className: 'leaflet-div-icon'
});

const handlerDrawer = ({lat, long, name, url}) => {
  setOpenDrawer(!openDrawer)
  setNameDrawer(name)
  setLatDrawer(lat)
  setLongDrawer(long)
  setImgDrawer(url)
}

    return (
    <> 
      <TopBar/>
      <MapContainer center={[-34.9, -56.2]} zoom={13} className="where">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {MARKERS.map(({lng, lat, name, url}) => {
          console.log(name, lng, lat)
          return(
            <Marker position={[lat, lng]} icon={markerIcon} onClick={() => handlerDrawer(lat, long, name, url)}/>
          )
        })}
      </MapContainer>
      <SwipeableDrawer
        open={openDrawer}
      >
        <img src={url} />
      </SwipeableDrawer>
    </>
  )
}

export default Where;
