import React from 'react'

export default function LogoutModal() {
    return (
    <div>
    {/* <!-- Logout Modal--> */}
    <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">¿Listo para salir?</h5>
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">Selecciona "Cerrar Sesión" si estás listo para finalizar tu sesión actual.</div>
                <div className="modal-footer">
                    <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
                    <a className="btn btn-primary" href="login.html">Cerrar Sesión</a>
                </div>
            </div>
        </div>
    </div>
    </div>
)
}
