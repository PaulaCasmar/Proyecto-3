import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const User = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const token = localStorage.getItem("token")
    const role = localStorage.getItem("role")

    useEffect(() => {
        const getUser = async () => {
            const response = await axios.get("http://localhost:5000/api/user", {
                headers: {
                    Authorization: token
                }
            })
            console.log(response)
            setUser(response.data.user)
        }
        getUser();
    }, []);

    const deleteUser = (e) => {
        e.preventDefault()
        let option = window.confirm("¿Seguro que quieres borrar este usuario?")

        if (option == true) {
            try {
                const response = axios.delete("http://localhost:5000/api/user", {
                    headers: {
                        Authorization: token
                    }
                })
                console.log(response)
                localStorage.removeItem("token")
                localStorage.removeItem("role")

                setTimeout(() => {
                    window.location.href = "/"
                }, 2000)
            } catch (error) {
                console.log(error.response)
            }
        }
    }

    return (
        <div className="usuario">
         

            <div class="container bootdey">
                <div class="row bootstrap snippets bootdey">
                    <div class="col-md-4">
                        <div class="box box-widget widget-user-2">
                            <div class="widget-user-header bg-yellow">

                                <h3 class="widget-user-username">{user.name}</h3>
                                <h5 class="widget-user-desc">{user.surname}</h5>
                                
                            </div>
                            <div class="box-footer no-padding">
                            <p className="datosUser">{user.email} </p>
                                <p>{user.phone}</p>
                                <p>{user.adress}</p>
                                <button onClick={deleteUser} className="botonAdmiU btn btn-outline-secondary btn-sm">Borrar</button>


                                <Link to={"/modify_profile"}> <button className="botonAdmiU btn btn-outline-dark btn-sm">Modificar</button></Link>



                            </div>
                        </div>
                        
                    </div>

                </div>
                <div class="row bootstrap snippets bootdey">
                    <div class="col-md-4">
                        <div class="box box-widget widget-user-2">
                            <div class="widget-user-header bg-yellow">

                                <h3 class="widget-user-username">Mis pedidos</h3>
                        
                                
                            </div>
                            <div class="box-footer no-padding">
                            <div></div>

                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default User;