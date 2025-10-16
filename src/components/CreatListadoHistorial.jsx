import React from 'react'

export default function CrearListadoHistorial() {
    return (
        <>
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Listado de HV Estudiantil</h1>
                <a href="crear-historial.html" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    <i className="fas fa-plus fa-sm text-white-50"></i> Crear Registro
                </a>
            </div>

            {/* <!-- Content Row --> */}
            <div className="row">
                {/* <!-- Buscador --> */}
                <div className="input-group mb-3 rounded-pill overflow-hidden border w-50">
                    <span className="input-group-text bg-white border-0 pe-1" id="basic-addon1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </span>
                    <input id="search-input" type="search" className="form-control hide-focus border-0" placeholder="Buscar Estudiante" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

                {/* <!-- Tabla de HV Estudiantil --> */}
                <table id="table-historial" className="table align-middle mb-0 bg-white">
                    <thead className="bg-light">
                        <tr>
                            <th>#</th>
                            <th>Estudiante</th>
                            <th>Institución Anterior</th>
                            <th>Año Graduación</th>
                            <th>Promedio</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Alan Brito</td>
                            <td>Colegio Los Alamos</td>
                            <td>2023</td>
                            <td>4.5</td>
                            <td><span className="badge badge-success">Completo</span></td>
                            <td>
                                <button className="btn btn-sm btn-warning btn-edit" data-id="1">
                                    <i className="fas fa-edit"></i>
                                </button>
                                <button className="btn btn-sm btn-danger btn-delete" data-id="1">
                                    <i className="fas fa-trash"></i>
                                </button>
                                <button className="btn btn-sm btn-info btn-view" data-id="1">
                                    <i className="fas fa-eye"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Zoyla Vaca</td>
                            <td>Colegio Las Violetas</td>
                            <td>2023</td>
                            <td>4.2</td>
                            <td><span className="badge badge-warning">Pendiente</span></td>
                            <td>
                                <button className="btn btn-sm btn-warning btn-edit" data-id="2">
                                    <i className="fas fa-edit"></i>
                                </button>
                                <button className="btn btn-sm btn-danger btn-delete" data-id="2">
                                    <i className="fas fa-trash"></i>
                                </button>
                                <button className="btn btn-sm btn-info btn-view" data-id="2">
                                    <i className="fas fa-eye"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
