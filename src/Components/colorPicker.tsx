import { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");
  const handleColorChange = (e: any) => {
    setColor(e.target.value);
  };
  return (
    <div className="color-picker-container">
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Selected Color: {color}</p>
      </div>
      <label>Select a Color</label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
}
