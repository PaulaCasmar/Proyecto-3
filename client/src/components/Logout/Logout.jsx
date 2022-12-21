import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Logout = () =>{
localStorage.removeItem("token")
localStorage.removeItem("role")


useEffect (()=>{
    setTimeout(()=>{
        window.location.href="/"
    }, 1000)
}, [])

return(
    <div>
        <h2>¡¡Esperamos verte pronto!!</h2>

        <Link to={"/login"}>Ir a Login</Link>
    </div>
)
}

export default Logout;
