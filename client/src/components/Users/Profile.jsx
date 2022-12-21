import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { BsArrowLeftSquare } from "react-icons/bs"
import { Link } from "react-router-dom";

const Profile = () => {


  const [profile, setProfile] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    adress: "",
  });

  // const { userId } = useParams()
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [errorM, setErrorM] = useState();
  const [successM, setSuccessM] = useState();

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/user", {
          headers: {
            Authorization: token
          }
        })
        console.log(response)
        setProfile(response.data.user)
      } catch (error) {
        console.log(error.response)
      }

    }
    getProfile()
  }, [])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };
  //   console.log(user)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:5000/api/profile",
        { ...profile },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(response.data);
      setSuccessM(response.data.message)
      setTimeout(() => {
        navigate("/profile")

      }, 2000)
    } catch (error) {
      console.log(error.response)
      setErrorM(error.response.data.message)
      setTimeout(() => {

        navigate("/profile")
      }, 2000)
    }
  };

  return (


    <div className="modU">

      <div className=" ModUser container">
        <form onSubmit={handleSubmit}>
          <div className="row gutters">


            <div className="card h-100">
              <div className="card-body">
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mb-2 text">Modificar perfil</h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label className="datos" for="Nombre">Nombre</label>
                      <input
                        placeholder={profile.name}
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
                      <label className="datos" for="Apellidos">Apellidos</label>
                      <input
                        placeholder={profile.surname}
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
                        placeholder={profile.email}
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
                        placeholder={profile.phone}
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
                        value={profile.password}
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
                        placeholder={profile.adress}
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
                  </div>
                  
                  <div className="arrow">
                  <Link to={"/profile"}>
                  < BsArrowLeftSquare/>
                  </Link>
                  </div>
                 
                </div>
              </div>
            </div>

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
export default Profile;
