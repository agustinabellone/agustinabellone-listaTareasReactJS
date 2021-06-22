import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faSquare,
  faEdit,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Task = ({ tarea, toggleCompletada, editarTarea, borrarTarea }) => {
  const [editandoTarea, cambiarEditandoTarea] = useState(false);
  const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.texto);

  const handleSubmit = (e) => {
    e.preventDefault();
    editarTarea(tarea.id, nuevaTarea);
    cambiarEditandoTarea(false);
  };

  return (
    <li className="lista-tareas-tarea">
      <FontAwesomeIcon
        icon={tarea.completada ? faCheckSquare : faSquare}
        className={
          tarea.completada
            ? "lista-tareas-icono-check-green"
            : "lista-tareas-icono lista-tareas-icono-check"
        }
        onClick={() => toggleCompletada(tarea.id)}
      />
      <div className="lista-tareas-texto">
        {editandoTarea ? (
          <form
            action=""
            className="formulario-editar-tarea"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="formulario-editar-tarea-input"
              value={nuevaTarea}
              onChange={(e) => cambiarNuevaTarea(e.target.value)}
            />
            <button type="submit" className="formulario-editar-tarea-btn">
              Actualizar
            </button>
          </form>
        ) : (
          tarea.texto
        )}
      </div>
      <div className="lista-tareas-contenedor-botones">
        <FontAwesomeIcon
          icon={faEdit}
          className="lista-tareas-icono lista-tareas-icono-accion"
          onClick={() => cambiarEditandoTarea(!editandoTarea)}
        />
        <FontAwesomeIcon
          icon={faTimes}
          className="lista-tareas-icono lista-tareas-icono-accion"
          onClick={() => borrarTarea(tarea.id)}
        />
      </div>
    </li>
  );
};

export default Task;
