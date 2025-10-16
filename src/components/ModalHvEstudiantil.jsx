import React from 'react'

export default function ModalHvEstudiantil() {
    return (
    <div>
    {/* <!-- Modal Ver HV Estudiantil --> */}
    <div className="modal fade" id="verHistorialModal" tabindex="-1" role="dialog" aria-labelledby="verHistorialModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="verHistorialModalLabel">
                        <i className="fas fa-history fa-sm fa-fw mr-2 text-gray-400"></i>
                        Detalles del HV Estudiantil
                    </h5>
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Información del Estudiante</div>
                                            <div className="mb-2">
                                                <strong>Estudiante:</strong>
                                                <div id="modal-estudiante-nombre" className="text-gray-800"></div>
                                            </div>
                                            <div className="mb-2">
                                                <strong>Institución Anterior:</strong>
                                                <div id="modal-institucion" className="text-gray-800"></div>
                                            </div>
                                            <div className="mb-2">
                                                <strong>Año de Graduación:</strong>
                                                <div id="modal-anio-graduacion" className="text-gray-800"></div>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-school fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card border-left-success shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                Rendimiento Académico</div>
                                            <div className="mb-2">
                                                <strong>Promedio:</strong>
                                                <div id="modal-promedio" className="text-gray-800"></div>
                                            </div>
                                            <div className="mb-2">
                                                <strong>Puesto en Clase:</strong>
                                                <div id="modal-puesto" className="text-gray-800"></div>
                                            </div>
                                            <div className="mb-2">
                                                <strong>Conducta:</strong>
                                                <div id="modal-conducta" className="text-gray-800"></div>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-chart-line fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <div className="card border-left-info shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                                                Información Adicional</div>
                                            <div id="modal-informacion-adicional" className="text-gray-800"></div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-sticky-note fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-secondary" type="button" data-dismiss="modal">Cerrar</button>
                    <button className="btn btn-primary" type="button" onclick="editarHistorial()">
                        <i className="fas fa-edit fa-sm fa-fw mr-2"></i>Editar HV
                    </button>
                    <button className="btn btn-success" type="button" onclick="imprimirHV()">
                        <i className="fas fa-print fa-sm fa-fw mr-2"></i>Imprimir
                    </button>
                </div>
            </div>
        </div>
    </div>
    </div>
)
}
