import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () =>{
const [info, setInfo] = useState({
    email:"",
    password:""
})

const[errorM, setErrorM] = useState(null);
const[successM, setSuccessM] = useState(null);

const onChangeInput = (event) =>{
    const {name,value} = event.target 
    setInfo ({...info, [name]:value})
}
console.log(info);

const loginSubmit = async event => {
    event.preventDefault();

    try {
        const response = await axios.post("http://localhost:5000/api/login", 
        {...info})
        console.log(response.data)
        setSuccessM(response.data.message)

        localStorage.setItem("token", response.data.accessToken)
        localStorage.setItem("role", response.data.user.role)
        setTimeout(()=>{
            window.location.href="/"
        }, 2000)
    } catch (error) {
        setErrorM(error.response.data.message)
        // setTimeout(()=>{
        //     window.location.href="/login"
        // }, 2000)
    }
}
return(
<div>

    <h1 className="login">Login</h1>
    <div className="Form">
    <form onSubmit={loginSubmit}>
  <div className="mb-3">
    
    <input placeholder="Email" name="email" value={info.email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChangeInput}/>
    
  </div>
  <div className="mb-3">
   
    <input placeholder="Contraseña" name="password" value={info.password} type="password" className="form-control" id="exampleInputPassword1" onChange={onChangeInput}/>
  </div>
    
  <button type="submit" className="boton btn btn-primary" style={{ backgroundColor: "#c67100" }}>Login</button>
  <div id="emailHelp" className="form-text">Si has olvidado tu contrasena contacta con plantesambmagia@gmail.com</div>
</form>
<div className="alert alert-primary" role ="alert" style={{display: successM? "block" : "none" }}>
{successM}
</div>
<div className="alert alert-danger" role ="alert" style={{display: errorM? "block" : "none" }}>
{errorM}
</div>
</div>

<div className="reg">
    <p>¿No tienes cuenta?</p>
    <Link to="/register">
    <button  className="boton btn btn-primary" style={{ backgroundColor: "#c67100" }}>Regístrate</button>
    </Link>
</div>

</div>




)
}
export default Login;

