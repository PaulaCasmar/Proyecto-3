import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {BsFillCartPlusFill} from "react-icons/bs"
import { BsArrowLeftSquare } from "react-icons/bs"



const Product = () =>{
const navigate = useNavigate();
const {productId} = useParams();
const [product, setProduct] = useState({});
const [image, setImage] = useState ({});
const token = localStorage.getItem("token")
const role = localStorage.getItem("role")

useEffect(()=>{
    const getProduct = async () =>{
        const response = await axios.get(`http://localhost:5000/api/product/${productId}`)
    console.log(response)
    setProduct(response.data.producto)
    setImage(response.data.producto.image)
    }
    getProduct()
}, []);

const deleteProduct = async (e) =>{
    e.preventDefault()
let option = window.confirm("¿Seguro que quieres borrar el producto?")
if (option == true) {
    try {
        const response = await axios.delete (`http://localhost:5000/api/product/${productId}`, {
            headers: {
                Authorization: token
            }
        })
        console.log(response)
        setTimeout(()=>{
            navigate("/products")
            // window.location.href="/products"
        }, 2000)
    } catch (error) {
        console.log(error.response)
    }
    
}

}


return(
<div className="producto" >

<div className=" productC card mb-3">
<p className="card-title">{product.title}</p>
<img src={image.url} alt="Imagen producto" />
  <div className="card-body">
    
    <p className="card-text">
    {product.description}
    </p>
    <p className="card-text">
      <small className="text-muted">{product.price}€</small>
    </p>
    <p className="card-text">
      <small className="text-muted">Stock:{product.stock} </small>
    </p>
  </div>
  {
role == 1?(<Link><button onClick={deleteProduct} className="botonAdmi btn btn-outline-secondary btn-sm">Borrar</button> </Link>):(<></>)
}
{
role == 1?(
<Link to={`/modifyp/${product._id}`}> <button  className="botonAdmi btn btn-outline-dark btn-sm">Modificar</button></Link>):(<></>)

}
<button className="botoncart btn btn-outline-dark btn-sm"><BsFillCartPlusFill/></button>

 <div className="arrowP">
                  <Link to={"/products"}>
                  < BsArrowLeftSquare/>
                  </Link>
                  </div>

{/* {<Link>
role == 1?( <button onClick={deleteProduct}>Modificar</button>):(<></>)
</Link>} */}
</div>

{/* <h1>{product.title}</h1>
<img src={image.url} alt="Imagen producto" />

<h3>{product.price}</h3>
<h4>{product.description}</h4> */}



</div>
)
}

export default Product;