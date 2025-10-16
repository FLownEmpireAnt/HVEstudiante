import React from 'react'

export default function Paginacion() {
    return (
    <div>
    {/* <!-- Paginación --> */}
    <nav aria-label="Page navigation example">
        <ul className="pagination">
            <li className="page-item"><button className="page-link">Anterior</button></li>
            <li className="page-item"><span className="page-link">1</span></li>
            <li className="page-item"><button className="page-link">Siguiente</button></li>
        </ul>
    </nav>
    </div>
)
}
