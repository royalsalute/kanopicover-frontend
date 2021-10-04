import React, { useCallback, useState } from "react";
import axios from "axios";
import "./App.css";
import { convertColor } from "./utils/functions";

function App() {
  const [colors, setColors] = useState([]);

  const fetchColors = useCallback(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/colors/`).then((response) => {
      setColors(response.data.map((clr) => convertColor(clr)));
    });
  }, []);
  return (
    <div className="App">
      <button onClick={fetchColors}>Fetch Colors</button>
      <div style={{ flexDirection: "column", display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
        {colors.map((color, index) => {
          return <div key={index} style={{ width: 200, height: 40, backgroundColor: color }} />;
        })}
      </div>
    </div>
  );
}

export default App;
