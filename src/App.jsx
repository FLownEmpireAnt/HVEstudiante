import CrearHVEstudiante from './components/crearHVEstudiante'
import './App.css'
import Sidebar from './components/sidebar'
import Topbar from './components/Topbar'


function App() {

  return (
    <>
    <div id='wrapper'> 
      <Sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <div id="topbar-wrapper">
          <Topbar/>
          </div>
      <CrearHVEstudiante />
    </div>
    </div>
    </div>
    </>
  )
}

export default App
