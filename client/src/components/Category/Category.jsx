import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom"
import { BsFillCartPlusFill } from "react-icons/bs"

const Category = () => {
    const [category, setCategory] = useState([])
    const token = localStorage.getItem("token")
    const role = localStorage.getItem("role")
    const navigate = useNavigate();

    useEffect(() => {
        const getCategory = async () => {
            const response = await axios.get("http://localhost:5000/api/categories");
            setCategory(response.data.categorias)
            console.log(response.data)
        };
        getCategory();

    }, []);

    const deleteCategory = (categoria) => {
        localStorage.setItem("cat", categoria)
        // e.preventDefault()
        let option = window.confirm("¿Seguro que quieres borrar esta categoria?")
        let categoria2 = localStorage.getItem("cat")
        if (option == true) {
            try {
                const response = axios.delete(`http://localhost:5000/api/category/${categoria2}`, {
                    headers: {
                        Authorization: token
                    }
                })
                console.log(response)
                setTimeout(() => {
                    window.location.href = "/"
                }, 2000)
            } catch (error) {
                console.log(error.response)
            }
        }
    }


    return (

        <div >
            {/* <div> <img className="categorias" src={categorias} alt="" /></div> */}
            <h1 className="Cat">Categorías</h1>
            <div className="categories">
                <div className="categoriesCard">
                    {
                        category.map((categorias) => {
                            return (
                                // <Link to={`category/${categorias._id}`}>
                                <div className="card" key={categorias._id} >
                                    <img src={categorias.image.url} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        {/* <h5 className="card-title">{categorias.title}</h5> */}

                                        <Link to={`categories/${categorias._id}`} className="btnC btn btn-primary" style={{ backgroundColor: "#c67100" }}>Ir a {categorias.title}</Link>
                                        <div>
                                            <div>
                                                {
                                                    role == 1 ? (<Link><button onClick={() => { deleteCategory(categorias._id) }} className="botonAdmi btn btn-outline-secondary btn-sm">Borrar</button> </Link>) : (<></>)
                                                }
                                            </div>
                                            <div>
                                                {
                                                    role == 1 ? (
                                                        <Link to={`/modify/${categorias._id}`}> <button className="btn btn-outline-dark btn-sm">Modificar</button></Link>) : (<></>)

                                                }
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                // </Link>


                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Category;

//             <div key = {categorias._id}>
// <h2>{categorias.title}</h2>
// <img src={categorias.image.url} alt={"Imagen producto"} />
//             </div>