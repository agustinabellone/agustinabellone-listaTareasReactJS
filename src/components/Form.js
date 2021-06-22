import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons';

const Form = ({tareas, cambiarTareas}) => {
	const [inputTarea, cambiarInputTarea] = useState('');

	const handleInput = (e) => {
		cambiarInputTarea(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		cambiarTareas(
			[
				...tareas, 
				{
					id: uuidv4(),
					texto: inputTarea,
					completada: false
				}
			]
		);
		cambiarInputTarea('');
	}

	return (
		<form action="" className="formulario-tareas" onSubmit={handleSubmit}>
			<input
				type="text"
				className="formulario-tareas-input"
				placeholder="Escribe una tarea"
				value={inputTarea}
				onChange={(e) => handleInput(e)}
				required
			/>
			<button 
				type="submit"
				className="formulario-tareas-btn"
			>
				<FontAwesomeIcon 
					icon={faPlusSquare}
					className="formulario-tareas-icono-btn" 
				/>
			</button>
		</form>
	);
}
 
export default Form