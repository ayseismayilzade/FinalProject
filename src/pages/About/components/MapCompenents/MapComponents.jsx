// src/MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./mapcomponents.css"
import L from 'leaflet';

// Marker ikonu için varsayılan yolu düzeltme
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapComponents = () => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100%", width: "600px" }} className='map'>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
        Jl. Sunset Road No. 189, Kuta – Bali
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponents;
