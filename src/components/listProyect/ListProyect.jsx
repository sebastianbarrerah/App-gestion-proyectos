import React, { useState } from "react";
import './listProyect.scss'
import borrar from '../../assets/imagenes/borrar.png'
import lapiz from '../../assets/imagenes/lapiz.png'
const ListProyect = ({ list, toggleTodo, deleteTodo, editTodo }) => {

    const [toggleEdit, setToggleEdit] = useState({});
    const [name, setName] = useState('');

    const handleEdit = (event, id) => {
        const nameTask = event.target.value;
        setName(nameTask);
        editTodo(id, nameTask)
    }
    const handleClickEdit = (id, nameTask) => {
        setToggleEdit({ ...toggleEdit, [id]: !toggleEdit[id] });
        setName(nameTask);
    }


    return (
        <div className="lista">
            <ol className="lista__ol">
                {list.map((tarea) => (
                    <li className="lista__ol-li" key={tarea.id}>

                        <input className="lista__ol-input" type="checkbox" checked={tarea.completed} onChange={() => toggleTodo(tarea.id)} /> {
                            toggleEdit[tarea.id] ? (<input type='text' value={name} onChange={(event) => handleEdit(event, tarea.id)} />) : (<label className="lista__ol-label">{tarea.name}</label>)
                        }
                        <div className="container__btn">
                            <img className="btn__borrar" src={borrar} onClick={() => deleteTodo(tarea.id)} />
                            <img className="btn__editar" src={lapiz} onClick={() => handleClickEdit(tarea.id, tarea.name)} />
                        </div>
                    </li>
                ))}

            </ol>
        </div>
    );
};

export default ListProyect;

