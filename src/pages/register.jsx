import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


export default function Register() {
    let {register, handleSubmit, watch, formState: { errors } } = useForm();
    let contra = watch("contrasena");
    let navigate = useNavigate();
    let onSubmited = async (data)=>{
        console.log("Datos del Formulario");
        console.log(data);
        try {
            let respuesta = await axios.post("http://localhost/integrador_3/register", {
                nombre: data.nombre,
                correo: data.correo,
                contrasena: data.contrasena
            });
            alert(respuesta.data.message);
            navigate("/Login")
            console.log("Respuesta del servidor");
            console.log(respuesta);
        } catch (error) {
            console.log(error);
        }
    };
    return (
    <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-8">
                    <h1 className='text-center text-primary my-5' >Formulario de Ingreso</h1>
                </div>
                <div className="col-sm-8">
                    <form onSubmit={handleSubmit(onSubmited)} className='bg-body-secondary p-3 rounded'>
                        <div className="mb-3">
                            <label className="form-label">Nombre de Usuario</label>
                            <input type="text" {...register("nombre", {required: true})} className="form-control"  aria-describedby="emailHelp"/>
                            { errors.nombre && <p className='text-danger' >Debes escribir tu nombre</p> }
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Correo Electrónico</label>
                            <input type="email" {...register("correo", {required: true})} className="form-control"  aria-describedby="emailHelp"/>
                            { errors.correo && <p className='text-danger' >Debes escribir un correo</p> }
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Contraseña</label>
                            <input type="password" {...register("contrasena", {required: true})} className="form-control" />
                            { errors.contrasena && <p className='text-danger' >La contraseña es obligatoria</p> }
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Confirmar Contraseña</label>
                            <input type="password"
                            {...register("confirmar_contrasena", 
                                {required: "Por favor digita una contraseña",
                                    validate: (value)=> value == contra || "La contraseña no coincide"
                                })
                            } className="form-control"/>
                            { errors.confirmar_contrasena && <p className='text-danger' >{errors.confirmar_contrasena.message}</p> }
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label" >Comprobar</label>
                        </div >
                        <button  type="submit" className="btn btn-primary">Guardar</button>
                        </form>
                </div>
            </div>
        </div>
    </>
    )
}
