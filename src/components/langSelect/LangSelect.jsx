import React, { useState, useEffect } from "react";
import './index.css'

export const Lang = () => {
  const [selectedLang, setSelectedLang] = useState(""); 

  const handleLangChange = (event) => {
    setSelectedLang(event.target.value);
    
  };

  useEffect(() => {
    console.log(selectedLang); 
    document.documentElement.lang = selectedLang
    
  }, [selectedLang]);

  return (
    <form action="" method="post">
      <select name="lang" id="lang" onChange={handleLangChange}>
        <option value="pt-BR">Português Brasil</option>
        <option value="en">Inglês</option>
        <option value="es">Espanhol</option>
        <option value="fr">Francês</option>
      </select>
    </form>
  );
};
