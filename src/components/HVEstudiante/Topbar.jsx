import React from 'react'

// 💡 Accept the setIsLoggedIn function as a prop
export default function Topbar({ setIsLoggedIn }) {

  const handleLogout = () => {
    // 💡 Call the setter to revert state and log the user out
    setIsLoggedIn(false);
  };
  
  return (
    <>
      {/* */}
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        {/* ... (omitted search bar for brevity) ... */}

        {/* */}
        <ul className="navbar-nav ml-auto">
          {/* */}
          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span id="nombre-usuario" className="mr-2 d-none d-lg-inline text-gray-600 small">Admin Sistema</span>
              <img className="img-profile rounded-circle" src="img/undraw_profile.svg"/>
            </a>
            {/* */}
            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown">
              <a className="dropdown-item" href="#">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Perfil
              </a>
              <div className="dropdown-divider"></div>
              {/* 💡 Replace the button with a simple click handler for logout */}
              <button 
                type="button" 
                id="btnLogout" 
                className="dropdown-item" 
                onClick={handleLogout} // Call the logout function here
                data-toggle="modal" // Keep data-toggle if modal is desired, but handle the state change
                data-target="#logoutModal" // Keep data-target if modal is desired
              >
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Cerrar Sesión
              </button>
            </div>
          </li>
        </ul>
      </nav>
      {/* */}
    </>
  )
}