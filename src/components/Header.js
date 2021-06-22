import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

const Header = ({ mostrarCompletadas, cambiarMostrarCompletadas }) => {
  const boton = () => {
    cambiarMostrarCompletadas(!mostrarCompletadas);
  };

  return (
    <div className="header">
      <h1 className="header-titulo">Lista de Tareas</h1>
      {mostrarCompletadas ? (
        <button className="header-boton" onClick={() => boton()}>
          No mostrar completadas
          <FontAwesomeIcon icon={faEyeSlash} className="header-boton-icono" />
        </button>
      ) : (
        <button className="header-boton" onClick={() => boton()}>
          Mostrar completadas
          <FontAwesomeIcon icon={faEye} className="header-boton-icono" />
        </button>
      )}
    </div>
  );
};

export default Header;
