import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Form from '../components/form/Form'
import ListProyect from '../components/listProyect/ListProyect'


const Router = () => {
  return (
   <BrowserRouter>
        <Routes>
            <Route path='/' element={<Form/>}/>
            <Route path='gestion/proyecto' element={<ListProyect/>}/>
        </Routes>
   </BrowserRouter>
  )
}

export default Router

