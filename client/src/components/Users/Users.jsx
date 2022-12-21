import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";




const Users = () => {

    const [users, setUsers] = useState([]);
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role")

    useEffect(() => {
        const getUsers = async () => {
            const response = await axios.get("http://localhost:5000/api/users", {
                headers: {
                    Authorization: token
                }
            });

            console.log(response.data.users)
            setUsers(response.data.users)
            console.log(response.data)
        };
        getUsers();
    }, []);

    const deleteUser = (user) => {
        localStorage.setItem("user", user)
        let option = window.confirm("¿Seguro que quieres eliminar el usuario?")
        let user2 = localStorage.getItem("user")
        if (option == true) {
            try {
                const response = axios.delete(`http://localhost:5000/api/user/${user2}`, {
                    headers: {
                        Authorization: token
                    }
                })
                console.log(response)
                setTimeout(() => {
                    window.location.href = "/users"
                }, 2000)
            } catch (error) {
                console.log(error.response)
            }

        }

    }

    return (
        <div>

            <h1 className="usuarios">Usuarios</h1>
            {
                users.map((usuarios) => {
                    return (
                        <div key={users._id}>

                            <div class="container bootdey">
                                <div class="row bootstrap snippets bootdey">
                                    <div class="col-md-4">
                                        <div class="box box-widget widget-user-2">
                                            <div class="widget-user-header bg-yellow">
                                                
                                                <h3 class="widget-user-username">{usuarios.name}</h3>
                                                <h5 class="widget-user-desc">{usuarios.surname}</h5>
                                                <h6>{usuarios.email} </h6>
                                            </div>
                                            <div class="box-footer no-padding">

                                                {
                                                    role == 1 ? (<button onClick={() => { deleteUser(usuarios._id) }} className="botonAdmiU btn btn-outline-secondary btn-sm">Borrar</button>) : (<></>)
                                                }
                                                {
                                                    role == 1 ? (
                                                        <Link to={`/modifyu/${usuarios._id}`}> <button className="botonAdmiU btn btn-outline-dark btn-sm">Modificar</button></Link>) : (<></>)

                                                }

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    )
                })}

        </div>
    )

}

export default Users;