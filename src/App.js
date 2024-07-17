
import './App.css';
import SimpleMap from './map';
import Imgg from '../src/acsset/duan24h.net_BĐQHSDĐ_Dong_Anh_HN_2030.jpg'
import MyMapComponent from './maptwo';
import React, { useState } from 'react';
import MapWithOverlay from './maptwo';

function App() {
  const [opacity, setOpacity] = useState(1); 
  const [scale, setScale] = useState(1);
  const handleOpacityChange = (event) => {
    setOpacity(event.target.value); 
  };
  const handleWheel = (event) => {
    event.preventDefault();
    if (event.deltaY < 0) {
      setScale((prevScale) => Math.min(prevScale + 0.1, 3)); // Giới hạn phóng to tối đa là 3 lần
    } else {
      setScale((prevScale) => Math.max(prevScale - 0.1, 0.1)); // Giới hạn thu nhỏ tối thiểu là 0.1 lần
    }
  };
  
  return (
    <div className="App">
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <img 
        className='hihi'
        src={Imgg}
        alt="My Image" 
          style={{
            opacity: opacity, width: '850px', height: 'auto' ,
            transform: `scale(${scale})`,
            transition: 'transform 0.2s ease',
          }} 
          onWheel={handleWheel}
      />
      <br />
      <input 
        type="range" 
        min="0" 
        max="1" 
        step="0.01" 
        value={opacity} 
        onChange={handleOpacityChange}
        style={{ marginTop: '20px' }}
      />
      </div>
      <SimpleMap />
   
    {/* <MapWithOverlay/> */}
      
    </div>
  );
  
}

export default App;
