import { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff");

  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Selected Color: {color}</p>
      </div>
      <label>Select a color:</label>
      <input
        type="color"
        onChange={(e) => setColor(e.target.value)}
        value={color}
      />
    </div>
  );
};

export default ColorPicker;
