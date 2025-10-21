import React from 'react';

// 💡 Accept the setIsLoggedIn function as a prop
export default function Login({ setIsLoggedIn }) {

  const handleLogin = () => {
    // ⚠️ Prevent default form submission if it were a submit button
    // e.preventDefault(); 
    
    // 💡 This is the crucial step that resolves the warning: calling the setter
    // In a real app, you'd add API calls and validation here.
    console.log("Login clicked");
    setIsLoggedIn(true); 
  };

  return (
    <div className="container">
      {/* ... (omitted outer rows for brevity) ... */}
      <div className="row justify-content-center ">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-2  ">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Bienvenido</h1>
                    </div>
                    <form className="user">
                      {/* ... (input fields) ... */}
                      <div className="form-group">
                        <input type="text" className="form-control form-control-user" id="usuarioForm" placeholder="Usuario..." />
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control form-control-user" id="contraForm" placeholder="Contraseña" />
                      </div>
                      {/* ... (remember me checkbox) ... */}
                      
                      {/* 💡 Connect the button to the handler */}
                      <button 
                        type="button" 
                        className="btnLogin btn btn-primary btn-user btn-block"
                        onClick={handleLogin} // Call the function here
                      >
                        Iniciar sesión
                      </button>
                      <hr />
                      {/* ... (social media and links) ... */}
                      <a href="index.html" className="btn btn-google btn-user btn-block">
                        <i className=" fa-fw"></i> Crear cuenta nueva
                      </a>
                      {/* ... */}
                    </form>
                    {/* ... (forgot password/create account) ... */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}