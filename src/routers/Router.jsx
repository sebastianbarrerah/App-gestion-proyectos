import React, { useEffect, useReducer, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initialUser, userReducer } from "../service/admiReducer/admiReducer";
import { createContext } from "react";
import Form from '../components/form/Form'
import { getSession } from "../service/sessionService/sessionService";
// import ListProyect from "../components/listProyect/ListProyect";
import FuncionesProyect from "../components/funcionesProyect/FuncionesProyect";

export const AppContext = createContext({});

const Router = () => {
    const [nameUser, setNameUser] = useState([]);
  useEffect(() => {
    const user = getSession();
    if (user?.name) {
      userDispatch({
        type: "login",
        payload: {
          isAutenticated: true,
          user: user,
        },
      });
    }
  }, []);

    const [userLogin, userDispatch] = useReducer(userReducer, initialUser);
    const globalState = {
        user: {
        userLogin,
        userDispatch,
        },
    };

  return (
    <AppContext.Provider value={globalState}>
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Form/>}/>
                    <Route path='/gestion/proyecto' element={<FuncionesProyect/>}/>
                </Routes>
        </BrowserRouter>
   </AppContext.Provider>
  )
}

export default Router

