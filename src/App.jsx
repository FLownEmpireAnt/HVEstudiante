import Login from "./pages/Login"
import Register from "./pages/registro"
import CrearHVEstudiante from "./components/crearHVEstudiante"
import CrearListadoHistorial from "./components/CreatListadoHistorial"
import { Routes, Route, Navigate, BrowserRouter, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

function App() {
  let [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated')== "true");
  let [userName, setUserName] = useState(localStorage.getItem('userName') || '');
  //console.log("usuario logueado: "+isAuthenticated)

  useEffect(()=>{
    localStorage.setItem('isAuthenticated', isAuthenticated);
    localStorage.setItem('userName', userName);
  },[isAuthenticated, userName]);



  let handleLogin = (userName)=> {
    setIsAuthenticated(true); //token de autorización
    setUserName(userName);
  };

  let handleLogout = ()=>{
    setIsAuthenticated(false); //token de autorización
    setUserName('');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userName');
  };

  return (
    <>
      <Routes>
        <Route path="/login" element={ isAuthenticated ? <Navigate to="/crearHVEstudiante"/> : <Login onLogin={handleLogin} /> } />
        <Route path="/register" element={ isAuthenticated ? <Navigate to="/crearListadoHistorial"/> : <Register  /> } />
        <Route path="/crearHVEstudiante" element={ isAuthenticated ? <CrearHVEstudiante user={userName} onLogout={handleLogout} /> : <Navigate to="Login" /> } />
        <Route path="/CreatListadoHistorial" element={ isAuthenticated ? <CrearListadoHistorial user={userName} onLogout={handleLogout} /> : <Navigate to="Login" /> } />
        <Route path="*" element={ <Login onLogin={handleLogin} /> } />
      </Routes>
    </>
  )
};

export default App
