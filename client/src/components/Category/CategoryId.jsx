import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {BsFillCartPlusFill} from "react-icons/bs"




const CategoryId = () => {
    const { categoryId } = useParams();
    const [productos, setProductos] = useState([]);
    const [image, setImage] = useState({});
    const token = localStorage.getItem("token")
    const role = localStorage.getItem("role")
    const [categories, setCategories] = useState({})

    useEffect(() => {
        const getCategories = async () => {
            const response = await axios.get(`http://localhost:5000/api/category/${categoryId}`)
            console.log(response)
            setProductos(response.data.categoria.products)
            setCategories(response.data.categoria)
            setImage(response.data.categoria.products.image)
        }
        getCategories()
    }, []);

    const deleteCategories = async (e) => {
        e.preventDefault()
        let option = window.confirm("¿Seguro que quieres borrar la categoria?")
        if (option == true) {
            try {
                const response = await axios.delete(`http://localhost:5000/api/categories/${categoryId}`, {
                    headers: {
                        Authorization: token
                    }
                })
                console.log(response)

                setTimeout(() => {
                    window.location.href = "/categories"
                }, 2000)

            } catch (error) {
                console.log(error.response)
            }

        }

    }


    return (
        <div>

<div className="photoPr"></div>

            <h1  className="Ca">{categories.title}</h1>
            {
                productos.map((productos) => {
                    return (
                        <Link key={productos._id} to={`/product/${productos._id}`}>

                            <div className="productos">

                                <div className="col">
                                    <div className="tarjeta card">
                                        <img src={productos.image.url} className="card-img-top" alt="Hollywood Sign on The Hill" />
                                        <div className="card-body">
                                            <h5 className="card-title">{productos.title}</h5>
                                            <div className="PS">
                                                <p>Precio:{productos.price}€</p>

                                            </div>
                                            <button className="botoncart btn btn-outline-dark btn-sm"><BsFillCartPlusFill/></button>
                                        </div>
                                    </div>
                                </div>




                            </div>
                           
                        </Link>
                    )

                })
            }
            

        </div>
    )

}

export default CategoryId;