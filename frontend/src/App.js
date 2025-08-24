import React, { useState, useEffect } from "react";
import axios from "axios";


const colorsArray = ["Red", "Yellow", "Green", "Blue", "Pink", "Gray"];

function App() {
  const [colors, setColors] = useState(colorsArray);
  const [boxes, setBoxes] = useState([{ color: "red", height: 40, width: 100 }]);

  useEffect(() => {
    let interval = setInterval(() => {
      if (boxes.length >= 16) {
        clearInterval(interval);

       
        axios
          .post("http://127.0.0.1:8000/api/boxes/sendmail", { name: "Haseeb Ahmed" })
          .then((res) => console.log("Email sent:", res.data))
          .catch((err) => console.error("Email error:", err));

        return;
      }

      const newBoxes = [];
      for (let i = 0; i < boxes.length * 2; i++) {
        const randomColor =
          colorsArray[Math.floor(Math.random() * colorsArray.length)];

        const boxData = { height: 40, width: 100, color: randomColor };
        newBoxes.push(boxData);

   
        axios.post("http://127.0.0.1:8000/api/boxes", boxData).catch((err) => {
          console.error("DB save error:", err);
        });
      }
      setBoxes(newBoxes);
    }, 30000); 

    return () => clearInterval(interval);
  }, [boxes]);

  const shuffleColors = () => {
    const shuffled = [...colors].sort(() => Math.random() - 0.5);
    setColors(shuffled);
  };

  const sortBoxes = () => {
    const sorted = [...boxes].sort(
      (a, b) => colors.indexOf(a.color) - colors.indexOf(b.color)
    );
    setBoxes(sorted);
  };

  return (
    <div className="p-4">
      <h2>Colors: {colors.join(", ")}</h2>

      <div style={{ marginBottom: "10px" }}>
        <button onClick={shuffleColors} style={{ marginRight: "10px" }}>
          Shuffle Colors
        </button>
        <button onClick={sortBoxes}>Sort Boxes</button>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginTop: "20px",
        }}
      >
        {boxes.map((box, i) => (
          <div
            key={i}
            style={{
              height: `${box.height}px`,
              width: `${box.width}px`,
              backgroundColor: box.color,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

