import React from "react";
import { BiUserCircle, BiCart } from "react-icons/bi";
import logo2 from "../images/logo2.png"
import {RiUserFollowFill, RiUserFill} from "react-icons/ri"

// import { Link } from "react-router-dom";
// import PAM1 from "../images/PAM1.png"

const Navbar = () => {
  const role = localStorage.getItem("role");
  // NAVBAR NO LOGUEADO
  const Nav1 = () => {
    return (
      <nav className="navbarpam navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "rgba(101,73,156)" }}>
        <div className="container-fluid">
        <a className="navbar-brand" href="/">
           <img src={logo2} alt="Logo" className="logo2"/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/products">
                  Productos
                </a>
              </li>
             
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/categories"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorias
                </a>
                <ul className="dropdown-menu" style={{ backgroundColor: "#ffa000" }}>
                  <li>
                    <a className="dropdown-item" href="http://localhost:3000/categories/639b12cdc5e2ee714f412f78">
                      Colgantes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="http://localhost:3000/categories/63a1a8a196ddcd53dc31d7ec">
                      Pendientes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="http://localhost:3000/categories/63a1a88096ddcd53dc31d7e7">
                      Decoración
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="http://localhost:3000/categories/63a1a8bc96ddcd53dc31d7f1">
                      Runas
                    </a>
                  </li>
                 
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/about">
                  Sobre P.A.M
                </a>
              </li>
              
              <li className="nav-item dropdown">
                <a
                  className=" user nav-link dropdown-toggle "
                  href="/profile"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <RiUserFill/>
                </a>
                <ul className="dropdown-menu" style={{ backgroundColor: "#ffa000" }}>
                  <li>
                    <a className="dropdown-item" href="/login">
                      Login
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/register">
                      Registrarse
                    </a>
                  </li>
                 
                </ul>
              </li>
            
            </ul>
            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}

          </div>
        </div>
      </nav>
    );
  };

  // NAVBAR USUARIO LOGUEADO
  const NavUser = () => {
    return (
      <nav className="navbarpam navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "rgba(101,73,156)" }}>
        <div className="container-fluid">
        <a className="navbar-brand" href="/">
           <img src={logo2} alt="Logo" className="logo2"/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/products">
                  Productos
                </a>
              </li>
              {/* <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li> */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/categories"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorias
                </a>
                <ul className="dropdown-menu" style={{ backgroundColor: "#ffa000" }}>
                  <li>
                    <a className="dropdown-item" href="http://localhost:3000/categories/639b12cdc5e2ee714f412f78">
                      Colgantes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="http://localhost:3000/categories/63a1a8a196ddcd53dc31d7ec">
                      Pendientes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="http://localhost:3000/categories/63a1a88096ddcd53dc31d7e7">
                      Decoración
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="http://localhost:3000/categories/63a1a8bc96ddcd53dc31d7f1">
                      Runas
                    </a>
                  </li>
                  
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/about">
                  Sobre P.A.M
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Pedidos Personalizados
                </a>
              </li> */}

              <li className="cart nav-item dropdown ">
                <a
                  className=" cart nav-link dropdown-toggle"
                  href="/profile"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BiCart/>
                </a>
                <ul className="dropdown-menu" style={{ backgroundColor: "#ffa000" }}>
                <li>
                    <a className="dropdown-item " href="/cart">
                      Carrito
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="/profile">
                      Perfil
                    </a>
                  </li>
                  
                  <li>
                    <a className="dropdown-item" href="/logout">
                      Logout
                    </a>
                  </li>
                 
                </ul>
              </li>
            
            </ul>
            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}

</div>
        </div>
      </nav>
    );
  };

  // NAVBAR ADMIN
  const NavAdmin = () => {
    return (
      <nav className="navbarpam navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "rgba(101,73,156)" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
           <img src={logo2} alt="Logo" className="logo2"/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/products">
                  Productos
                </a>
              </li>
              {/* <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li> */}
              <li className="nav-item dropdown" >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorias
                </a>
                <ul className="dropdown-menu" style={{ backgroundColor: "#ffa000" }}>
                  <li>
                    <a className="dropdown-item" href="http://localhost:3000/categories/639b12cdc5e2ee714f412f78">
                      Colgantes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="http://localhost:3000/categories/63a1a8a196ddcd53dc31d7ec">
                      Pendientes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="http://localhost:3000/categories/63a1a88096ddcd53dc31d7e7">
                      Decoración
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="http://localhost:3000/categories/63a1a8bc96ddcd53dc31d7f1">
                      Runas
                    </a>
                  </li>
                 
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/about">
                  Sobre P.A.M
                </a>
              </li>
              
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/profile"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <RiUserFollowFill/>
                </a>
                <ul className="dropdown-menu" style={{ backgroundColor: "#ffa000" }}>
                  <li>
                    <a className="dropdown-item" href="/new_product">
                      Añadir producto
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/new_category">
                      Añadir categoria
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/users">
                      Usuarios
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/logout">
                      Logout
                    </a>
                  </li>
                 
                </ul>
              </li>
            
            </ul>
            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}

            
          </div>
        </div>
      </nav>
    );
  };

  let nav = role == 0 ? NavUser() : role == 1 ? NavAdmin() : Nav1();
  return (<div>{nav}</div>);
};

export default Navbar;
