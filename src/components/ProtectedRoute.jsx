import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'



export default function ProtectedRoute() {

    let token = JSON.parse(localStorage.getItem("token"));

    return token ? <Outlet /> : <Navigate  to="/" />
}
