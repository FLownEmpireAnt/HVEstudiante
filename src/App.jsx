import Sidebar from './components/sidebar'
import Topbar from './components/Topbar'
import CrearHVEstudiante from './components/crearHVEstudiante'
import CrearListadoHistorial from './components/CreatListadoHistorial'
import Paginacion from './components/Paginacion'
import Footer from './components/Footer'
import LogoutModal from './components/LogoutModal'
import ModalHvEstudiantil from './components/ModalHvEstudiantil'
//import './App.css'


function App() {

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
}

export default App
