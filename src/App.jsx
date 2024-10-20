import React, { useState } from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('#ffffff'); // Default color is white

  // Function to set the background color
  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div className="app" style={{ backgroundColor: bgColor }}>
      <h1 style={{ color: '#000' }}>Select a background color</h1>
      <div className="color-buttons">
        <button onClick={() => changeColor('#FF5733')}>Red</button>
        <button onClick={() => changeColor('#33FF57')}>Green</button>
        <button onClick={() => changeColor('#3357FF')}>Blue</button>
        <button onClick={() => changeColor('#FFFF33')}>Yellow</button>
        <button onClick={() => changeColor('#FF33FF')}>Magenta</button>
      </div>
    </div>
  );
}

export default App;
