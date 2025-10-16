import Sidebar from './components/sidebar'
import Topbar from './components/Topbar'
import CrearHVEstudiante from './components/crearHVEstudiante'
import CrearListadoHistorial from './components/CreatListadoHistorial'
import Paginacion from './components/Paginacion'
import Footer from './components/Footer'
import LogoutModal from './components/LogoutModal'
import ModalHvEstudiantil from './components/ModalHvEstudiantil'
//import './App.css'

import CrearHVEstudiante from './components/HVEstudiante/crearHVEstudiante'
import Sidebar from './components/HVEstudiante/Sidebar'
import Topbar from './components/HVEstudiante/Topbar'
import Login from './components/Auth/Login'; // Asegúrate de que esta ruta sea correcta
import './App.css'
import React, { useState } from 'react';
// 💡 Importamos los componentes necesarios de React Router
import { Route, Routes } from 'react-router-dom'; 

function App() {
  // 💡 Mantenemos el estado de autenticación (falso por defecto)
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  return (
    <>
      <div id="wrapper">
        <Sidebar/>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="topbar-wrapper">
            <Topbar/>
          </div>
          <div className="container-fluid">
            <CrearListadoHistorial/>
            <Paginacion/>
            <Footer/>
            <LogoutModal/>
            <ModalHvEstudiantil/>
          </div>
        </div >
      </div>
      </>
  )
  // Componente que contiene el diseño (Layout) principal
  const MainLayout = () => (
    <div id='wrapper'> 
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div id="topbar-wrapper">
            {/* Se pasa la función de logout */}
            <Topbar setIsLoggedIn={setIsLoggedIn} /> 
          </div>
          
          {/* BLOQUE DE RUTAS DE LA APLICACIÓN PROTEGIDA */}
          <Routes>
            <Route path='/' element={<CrearHVEstudiante/>}/> 
            <Route path='/crearHVEstudiante'element={<CrearHVEstudiante/>}/>
            {/* Si intenta acceder a una ruta inexistente, lo lleva al dashboard/HV */}
            <Route path='*' element={<CrearHVEstudiante/>}/> 
          </Routes>
          
        </div>
      </div>
    </div>
  );

  // =======================================================
  // 💡 LÓGICA DE PROTECCIÓN DE RUTAS CON RETORNO TEMPRANO
  // =======================================================

  // 1. Si NO está logeado, ignora el MainLayout y renderiza solo el Login.
  if (!isLoggedIn) {
      return (
          <Routes>
              {/* Cualquier ruta que intente cargar, lo lleva al componente Login */}
              <Route path='*' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          </Routes>
      );
  }

  // 2. Si SÍ está logeado, retorna el MainLayout (el cual contiene todas las rutas internas).
  return (
    <MainLayout />
  );
}

export default App