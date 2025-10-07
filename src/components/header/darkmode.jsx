import React, { useState, useEffect } from "react";
import "./darkmode"; // Opcional, para estilos del botón

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Cuando cambie darkMode, aplicamos o removemos la clase en body
    if (darkMode) document.body.classList.add("dark-theme");
    else document.body.classList.remove("dark-theme");
  }, [darkMode]);

  return (
    <button
      className="dark-toggle"
      onClick={() => setDarkMode(!darkMode)}
      title="Toggle Dark Mode"
    >
      {darkMode ?  <i class="uil uil-sun"></i> : <i class="uil uil-moon"></i>}
    </button>
  );
};

export default DarkMode;
