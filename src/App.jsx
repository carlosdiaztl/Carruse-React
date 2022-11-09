import React, { useEffect, useState } from "react";

const App = () => {
  const [index, setIndex] = useState(0);
  const initialImg =
    "https://gcdn.lanetaneta.com/wp-content/uploads/2021/05/Naruto-Pitch-pide-una-precuela-mas-que-una-secuela.jpeg";
  const [imagenes, setImagenes] = useState(initialImg);
  // agregan segun cantidad de imagenes
  useEffect(() => {
    if (index < 2) {
      setTimeout(() => {
        setIndex(index + 1);
      }, 2000);
    }
    if (index === 2) {
      setTimeout(() => {
        setIndex(0);
      }, 2000);
    }
  }, [index]);
  //en set imagenes cambiar y poner la imagen que quieran mostrar
  useEffect(() => {
    if (index === 0) {
      setImagenes(initialImg);
    }
    if (index === 1) {
      setImagenes(
        "https://www.currentschoolnews.com/wp-content/uploads/2022/06/naruto.jpg"
      );
    }
    if (index === 2) {
      setImagenes(
        "https://i.pinimg.com/originals/33/4d/72/334d72bb76fb4fb3e31239c0a49f07f7.png"
      );
    }
  }, [index]);

  return (
    <div>
      App
      <img src={imagenes} />
    </div>
  );
};

export default App;
