import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {BsArrowLeftSquare} from "react-icons/bs"
import { Link } from "react-router-dom";

const ModUser = () => {


    const [user, setUser] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        adress: "",
    });

    const { userId } = useParams()
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [errorM, setErrorM] = useState();
    const [successM, setSuccessM] = useState();

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/user/${userId}`, {
                    headers: {
                        Authorization: token
                    }
                })
                console.log(response)
                setUser(response.data.user)
            } catch (error) {
                console.log(error.response)
            }

        }
        getUser()
    }, [])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
    //   console.log(user)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(
                `http://localhost:5000/api/usuario/${userId}`,
                { ...user },
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );
            console.log(response.data);
            setSuccessM(response.data.message)
            setTimeout(() => {
                navigate("/users")

            }, 2000)
        } catch (error) {
            console.log(error.response)
            setErrorM(error.response.data.message)
            setTimeout(() => {

                navigate("/users")
            }, 2000)
        }
    };

    return (
        <div className="modU">

            <div className=" ModUser container">
            <form onSubmit={handleSubmit}>
                <div className="row gutters">
                    
                    {/* <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12"> */}
                        <div className="card h-100">
                            <div className="card-body">
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h6 className="mb-2 text">Modificar usuario</h6>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label className="datos" for="Nombre">Nombre</label>
                                            <input
                                                placeholder={user.name}
                                                name="name"
                                                type="text"
                                                className="form-control"
                                                id="nameInput"
                                                onChange={handleChange}
                                            />
                                            {/* <input type="text" className="form-control" id="fullName" placeholder="Enter full name" /> */}
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label  className="datos" for="Apellidos">Apellidos</label>
                                            <input
                                                placeholder={user.surname}
                                                name="surname"
                                                type="text"
                                                className="dato form-control"
                                                id="surnameInput"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label className="datos" for="Email">Email</label>
                                            <input
                                                placeholder={user.email}
                                                name="email"
                                                type="text"
                                                className="form-control"
                                                id="emailInput"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label className="datos" for="Teléfono">Teléfono</label>
                                            <input
                                                placeholder={user.phone}
                                                name="phone"
                                                type="text"
                                                className="form-control"
                                                id="phoneInput"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label className="datos" for="Contraseña">Contraseña</label>
                                            <input
                                                value={user.password}
                                                name="password"
                                                type="password"
                                                className="form-control"
                                                id="passwordInput"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label className="datos" for="Dirección">Dirección</label>
                                            <input
                                                placeholder={user.adress}
                                                name="adress"
                                                type="text"
                                                className="form-control"
                                                id="adresskInput"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                </div>
                                
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="text-right">
                                            
                                        <button type="submit" className="ModB btn btn-primary" style={{ backgroundColor: "#c67100" }}>
                        Modificar
                    </button>
                                        </div>
                                        <div className="arrow">
                  <Link to={"/users"}>
                  < BsArrowLeftSquare/>
                  </Link>
                  </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
                </form>
                <div
                    className="alert alert-primary"
                    role="alert"
                    style={{ display: successM ? "block" : "none" }}
                >
                    {successM}
                </div>
                <div
                    className="alert alert-danger"
                    role="alert"
                    style={{ display: errorM ? "block" : "none" }}
                >
                    {errorM}
                </div>
            </div>
        </div>
    );


};
export default ModUser;
