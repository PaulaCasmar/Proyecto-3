import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ModProduct = () => {


  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
    categoryId: "",
  });

  const { productId } = useParams()
  const navigate = useNavigate();
  const [image, setImage] = useState({});
  const token = localStorage.getItem("token");
  const [categorias, setCategorias] = useState([]);
  const [errorM, setErrorM] = useState();
  const [successM, setSuccessM] = useState();

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(`http://localhost:5000/api/product/${productId}`)
      console.log(response)
      setProduct(response.data.producto)
      setImage(response.data.producto.image)
    }
    getProduct()
  }, [])


  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      if (!file) return alert("No se ha subido la imagen");

      let formData = new FormData();
      formData.append("file", file);
      const response = await axios.post(
        "http://localhost:5000/api/upload",
        formData,
        {
          headers: {
            Authorization: token,
            "content-type": "multipart/form-data",
          },
        }
      );

      console.log(response);
      setImage(response.data);
    } catch (error) {
      console.log(error.response)
    }
  };
  // console.log(image)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  console.log(product)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:5000/api/product/${productId}`,
        { ...product, image },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(res.data);
      setSuccessM(res.data.message)
      setTimeout(() => {
        navigate(`/product/${productId}`)
        // window.location.href="/products"
      }, 2000)
    } catch (error) {
      console.log(error.response)
      setErrorM(error.res.data.message)
      setTimeout(() => {
        // window.location.href="/new_product"
        navigate("/new_product")
      }, 2000)
    }
  };

  return (
    <div>



      <h1 className="AddProduct">Modificar Producto</h1>
      <div className="FormAP">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="formT" htmlFor="product">Nombre Producto:</label>
            <input
              placeholder={product.title}
              name="title"
              type="text"
              className="form-control"
              id="titleInput"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="precio">Descripcion Producto:</label>
            <input
              placeholder={product.description}
              name="description"
              type="text"
              className="form-control"
              id="descriptionInput"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="descripcion">Precio Producto:</label>
            <input
              placeholder={product.price}
              name="price"
              type="text"
              className="form-control"
              id="priceInput"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="descripcion">Stock:</label>
            <input
              placeholder={product.stock}
              name="stock"
              type="text"
              className="form-control"
              id="stockInput"
              onChange={handleChange}
            />
          </div>
          <div>

            <input type="file" name="file" onChange={handleUpload} className="fotoP" />
            <img src={image.url} className="PhotoP" />
          </div>
          <button type="submit" className="btnProd btn btn-primary" style={{ backgroundColor: "#c67100" }}>
            Modificar
          </button>
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
export default ModProduct;
