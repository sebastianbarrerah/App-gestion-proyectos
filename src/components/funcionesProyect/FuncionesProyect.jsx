import React, { useState } from 'react'
import ListProyect from '../listProyect/ListProyect'; 
import FormProyect from '../formProyect/FormProyect'

const FuncionesProyect = () => {
  const initialValue = [
    {
      id: 1,
      name: "Ver grabación de la clase",
      completed: false
    },
    {
      id: 2,
      name: "Hacer el workshop",
      completed: false
    },
    {
      id: 3,
      name: "Enviar tarea de empleabilidad",
      completed: true
    },
  ]
  const [todo, setTodo] = useState(initialValue);
  console.log(todo)

  const addTodo = (task) => {
    const newTodo = {
      id: todo.length + 1,
      name: task.name,
      completed: false
    }

    const listOfTasks = [...todo, newTodo]
    console.log(listOfTasks);
    setTodo(listOfTasks)
  }

  const handleToggle = (id) => {
    const mappedList = todo.map(item => item.id === id? {...item, completed: !item.completed}: item)
    setTodo(mappedList)
  }

  const deleteTodo = (id) => {
    const deleteList = todo.filter(item => item.id !== id)
    setTodo(deleteList)
  }

  const editTodo = (id, newName) => {
    const editList = todo.map(item => item.id === id? {...item, name:newName }: item)
    setTodo(editList)
  }

  return (
   <div className='todolist'>
    <FormProyect addedTodo={addTodo}/>
    <ListProyect list= {todo} toggleTodo={handleToggle} deleteTodo={deleteTodo} editTodo={editTodo}/>
   </div>
  )
}

export default FuncionesProyect