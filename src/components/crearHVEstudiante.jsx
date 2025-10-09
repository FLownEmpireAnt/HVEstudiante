import React from 'react'

export default function CrearHVEstudiante() {
  return (
    <>

                {/* <!-- Begin Page Content --> */}
                <div className="container-fluid">

                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Crear HV Estudiantil</h1>
                        <a href="listado-historial.html" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                            <i className="fas fa-list fa-sm text-white-50"></i> Listado </a>
                    </div>

                    {/* <!-- Content Row --> */}
                    <div className="row">
                        <div className="col-8">
                            <form id="form-historial">
                                {/* <!-- Estudiante --> */}
                                <div className="form-group">
                                    <label className="form-label" for="estudiante-select">Estudiante</label>
                                    <select id="estudiante-select" className="form-control" required>
                                        <option value="">Seleccionar Estudiante</option>
                                        <option value="1">Alan Brito</option>
                                        <option value="2">Zoyla Vaca</option>
                                    </select>
                                </div>

                                {/* <!-- Información Académica Anterior --> */}
                                <div className="form-group">
                                    <label className="form-label" for="institucion-anterior">Institución Anterior</label>
                                    <input type="text" id="institucion-anterior" className="form-control" required />
                                </div>

                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <label className="form-label" for="anio-graduacion">Año de Graduación</label>
                                        <input type="number" id="anio-graduacion" className="form-control" min="2000" max="2030" required />
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="form-label" for="promedio-anterior">Promedio Anterior</label>
                                        <input type="number" id="promedio-anterior" className="form-control" step="0.1" min="0" max="5" required />
                                    </div>
                                </div>

                                {/* <!-- Información de Conducta --> */}
                                <div className="form-group">
                                    <label className="form-label" for="conducta-anterior">Conducta Anterior</label>
                                    <select id="conducta-anterior" className="form-control" required>
                                        <option value="">Seleccionar Conducta</option>
                                        <option value="Excelente">Excelente</option>
                                        <option value="Buena">Buena</option>
                                        <option value="Regular">Regular</option>
                                        <option value="Mala">Mala</option>
                                    </select>
                                </div>

                                {/* <!-- Logros y Reconocimientos --> */}
                                <div className="form-group">
                                    <label className="form-label" for="logros">Logros y Reconocimientos</label>
                                    <textarea className="form-control" id="logros" rows="3" placeholder="Ingrese los logros académicos, deportivos, culturales, etc."></textarea>
                                </div>

                                {/* <!-- Actividades Extracurriculares --> */}
                                <div className="form-group">
                                    <label className="form-label" for="actividades">Actividades Extracurriculares</label>
                                    <textarea className="form-control" id="actividades" rows="3" placeholder="Ingrese actividades deportivas, culturales, voluntariado, etc."></textarea>
                                </div>

                                {/* <!-- Observaciones --> */}
                                <div className="form-group">
                                    <label className="form-label" for="observaciones">Observaciones</label>
                                    <textarea className="form-control" id="observaciones" rows="4" placeholder="Observaciones adicionales sobre el historial del estudiante"></textarea>
                                </div>

                                {/* <!-- Botones --> */}
                                <button type="button" className="btn-create btn btn-primary btn-block mb-4">Crear HV</button>
                                <button type="button" className="d-none btn-update btn btn-success btn-block mb-4">Actualizar HV</button>
                            </form>
                        </div>
                    </div>
                    {/* <!-- Bootstrap core JavaScript--> */}
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
    <script src="js/sb-admin-2.min.js"></script>
    
    {/* <!-- Componentes --> */}
    <script src="js/components/sidebar.js"></script>
    <script src="js/components/topbar.js"></script>
    
    {/* <!-- Script específico del módulo --> */}
    <script src="js/modulos/crear-historial.js"></script>
    </div>
    </>
  )
}
