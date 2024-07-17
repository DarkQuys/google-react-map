import React from 'react';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white',
    background: 'red',
    padding: '10px 15px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

export default function SimpleMap() {
  const defaultProps = {
    center: {
        lat: 21.139,
        lng: 105.849
    },
    zoom: 12
  };

  return (
    
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
           <AnyReactComponent
          lat={21.139}
          lng={105.849}
          text="Đông Anh"
        />
      </GoogleMapReact>
    </div>
  );
}