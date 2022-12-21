import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
    categoryId: "",
  });
  const [image, setImage] = useState({});
  const token = localStorage.getItem("token");
  const [categorias, setCategorias] = useState([]);
  const [errorM, setErrorM] = useState();
  const [successM, setSuccessM] = useState();

   useEffect (()=>{
    const getCategory =  async ()  => {
      const resC = await axios.get ("http://localhost:5000/api/categories")
      console.log(resC)
      setCategorias(resC.data.categorias)
    }
    getCategory()
  }, [])

  // console.log(categorias)
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
      const res = await axios.post(
        "http://localhost:5000/api/product",
        { ...product, image },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(res.data);
      setSuccessM(res.data.message)
    setTimeout(()=>{
      navigate("/")
        // window.location.href="/products"
    }, 2000)
    } catch (error) {
      console.log(error.response)
      setErrorM(error.res.data.message)
        setTimeout(()=>{
            // window.location.href="/new_product"
            navigate("/new_product")
        }, 2000)
    }
  };

  return (
    <div>
      
      

      <h1 className="AddProduct">Añadir producto</h1>
      <div className="FormAP">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              placeholder="Title"
              name="title"
              value={product.title}
              type="text"
              className="form-control"
              id="titleInput"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              placeholder="Description"
              name="description"
              value={product.description}
              type="text"
              className="form-control"
              id="descriptionInput"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              placeholder="Price"
              name="price"
              value={product.price}
              type="text"
              className="form-control"
              id="priceInput"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              placeholder="Stock"
              name="stock"
              value={product.stock}
              type="text"
              className="form-control"
              id="stockInput"
              onChange={handleChange}
            />
          </div>
          <div>

          <select className="form-select" name="categoryId" onChange={handleChange} aria-label="Default select example">
                                <option selected>Selecciona...</option>
                                {categorias.map(e => (
                                    <option key={e._id} value={e._id}>{e.title}</option>

                                ))}
                            </select>
            {/* <select name="" id="">
            {
              categorias.map(categoria => {
                <option value = {categoria._id} key={categoria._id}>
                  {categoria.title}
                </option>
              })
            }
            </select> */}
            <input type="file" name="file" onChange={handleUpload} className="fotoP"/>
      <img src={image.url} className="PhotoP" />
          </div>
          <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#c67100" }}>
            Add
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

  // const onChangeInput = (event) => {
  //   const { name, value } = event.target;
  //   setProduct({ ...product, [name]: value });
  // };

  // const addPSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await axios.post("http://localhost:5000/api/product", {
  //       ...product,
  //     });
  //     console.log(response.data);
  //     setSuccessM(response.data.message);

  //     localStorage.setItem("token", response.data.accessToken);
  //   } catch (error) {
  //     setErrorM(error.response.data.message);
  //     setTimeout(() => {
  //       window.location.href = "/";
  //     }, 3000);
  //   }
  // };
};
export default AddProduct;
