import { useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function colorGeneraterUtility(length) {
    return Math.floor(Math.random() * length);
  }
  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[colorGeneraterUtility(hex.length)];
    }
    setColor(hexColor);
    console.log(hexColor);
  }
  function handleCreateRandomRgbColor() {
    const r = colorGeneraterUtility(256);
    const g = colorGeneraterUtility(256);
    const b = colorGeneraterUtility(256);

     setColor(`rgb(${r},${g},${b})`);
  }
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>HEX Color </button>
      <button onClick={() => setTypeOfColor("rgb")}>RGB Color </button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Random Color Generator{" "}
      </button>

      <div style={{ display: "flex", justifyContent: "center", color: "#fff",alignItems:"center",fontSize:"60px",marginTop:"50px",flexDirection:"column" }}>
        <h1>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h1>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
