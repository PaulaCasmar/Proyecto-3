import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () =>{
  const navigate = useNavigate();
    const [info, setInfo] = useState({
        name:"",
        surname:"",
        phone:"",
        email: "",
        password:""
    })

    const[errorM, setErrorM] = useState(null);
    const[successM, setSuccessM] = useState(null);

    const onChangeInput = (event) =>{
        const {name, value} = event.target
        setInfo ({...info, [name]:value})
    }

// console.log(info);

const registerSubmit = async event =>{
event.preventDefault();
try {
    const response = await axios.post("http://localhost:5000/api/register", 
    {...info})
    console.log(response.data)
    setSuccessM(response.data.message)

    localStorage.setItem("token", response.data.accessToken)
    setTimeout(()=>{
      window.location.href="/login"
  }, 3000)
} catch (error) {
    setErrorM(error.response.data.message)
        setTimeout(()=>{
            window.location.href="/"
        }, 3000)
}
}
return (
<div>

<h1 className="register">Crear cuenta</h1>
<div className="FormR">
    <form onSubmit={registerSubmit}>
    <div className="mb-3">
    <input placeholder="Nombre" name="name" value={info.name} type="text" className="form-control" id="nameInput" onChange={onChangeInput}/>
  </div>
  <div className="mb-3">
    <input placeholder="Apellidos" name="surname" value={info.surname} type="text" className="form-control" id="surnameInput" onChange={onChangeInput}/>
  </div>
  <div className="mb-3">
    <input placeholder="Teléfono" name="phone" value={info.phone} type="text" className="form-control" id="phoneInput" onChange={onChangeInput}/>
  </div>
  <div className="mb-3">
        <input placeholder="Email" name="email" value={info.email} type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" onChange={onChangeInput}/>
      </div>
  <div className="mb-3">
    <input placeholder="Contraseña" name="password" value={info.password} type="password" className="form-control" id="exampleInputPassword2" onChange={onChangeInput}/>
  </div>
  <div className="mb-3">
    <input placeholder="Dirección" name="adress" value={info.adress} type="text" className="form-control" id="adressInput" onChange={onChangeInput}/>
  </div>
  <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#c67100" }}>Registrarse</button>

</form>
<div className="alert alert-primary" role ="alert" style={{display: successM? "block" : "none" }}>
{successM}
</div>
<div className="alert alert-danger" role ="alert" style={{display: errorM? "block" : "none" }}>
{errorM}
</div>
</div>

<div className="log">
    <p>¿Ya tienes cuenta?</p>
    <Link to="/login">
    <button  className="boton btn btn-primary" style={{ backgroundColor: "#c67100" }}>Login</button>
    </Link>
</div>

</div>



)
}

export default Register;