import React from 'react'

import './formProyect.scss'
import useForm from '../../hooks/useform';
import { useNavigate } from 'react-router-dom';

const FormProyect = ({ addedTodo }) => {
  const [dataForm, handleChange, resetForm] = useForm({ name: '' });
  const Navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('soy dataform', dataForm)
    addedTodo(dataForm)
    resetForm();
  }

  const devolver = () => {
    Navigate("/")
  }
  return (
    <div className='input'>
        <button className='salir' onClick={devolver}>salir</button>
      <h1>Escribe tu proyecto</h1>
      <form onSubmit={handleSubmit} className='form'>
        <input className='form__input' type="text" placeholder='Ingrese nueva tarea' name="name" onChange={handleChange} value={dataForm.name} />
        <button className='form__button' type='sumbmit'>Crear</button>
      </form>
    </div>
  )
}

export default FormProyect;