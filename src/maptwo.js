import React, { useState } from 'react';
import { GoogleMap, LoadScript, GroundOverlay } from '@react-google-maps/api';
import Im from '../src/acsset/duan24h.net_BĐQHSDĐ_Dong_Anh_HN_2030.jpg'
import './App.css'
const containerStyle = {
  width: '100%',
  height: '100vh'
};

const center = {
  lat: 21.139,
  lng: 105.849
};

const bounds = {
  north: 21.15, 
  south: 21.13, 
  east: 105.86, 
  west: 105.84 
};

function MapWithOverlay() {
  const [opacity, setOpacity] = useState(0.5);

  const handleOpacityChange = (event) => {
    setOpacity(parseFloat(event.target.value));
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
        >
            <GroundOverlay
            url={Im} 
            bounds={bounds}
            options={{ opacity: opacity }}
          />
        </GoogleMap>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={opacity}
          onChange={handleOpacityChange}
          style={{
            position: 'absolute',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: '1000'
          }}
        />
      </div>
    </LoadScript>
  );
}

export default MapWithOverlay;