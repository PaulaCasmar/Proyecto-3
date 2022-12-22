import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import {BsFillCartPlusFill} from "react-icons/bs"


const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const response = await axios.get("http://localhost:5000/api/products");

            // console.log(response.data.products);
            setProducts(response.data.productos);
            console.log(response.data)
        };
        getProducts();

    }, []);

    return (
        <div>
<div className="photoP"></div>
            <h1 className="products">Productos</h1>
            {
                products.map((joyas) => {
                    return (
                        <Link key={joyas._id} to={`/product/${joyas._id}`}>
                            <div className="productos">
                                {/* <div className="row row-cols-1 row-cols-md-2 g-4"> */}
                                
                                    <div className="col">
                                        <div className="tarjeta card">
                                            <img src={joyas.image.url} className="card-img-top" alt="Product" />
                                            <div className="card-body">
                                                <h5 className="card-title">{joyas.title}</h5>
                                                                                               <div className="PS">
                                                <p>Precio:{joyas.price}€</p>
                                                <p>Stock:{joyas.stock}</p>
                                                </div>
                                                <button className="botoncart btn btn-outline-dark btn-sm"><BsFillCartPlusFill/></button>
                                            </div>
                                        </div>
                                    </div>
                                {/* </div> */}

                               
                            </div>
                        </Link>
                    );
                })}

        </div>
    )
}

export default Products;