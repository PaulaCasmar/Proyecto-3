import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ModCategory = () => {
  

  const [category, setCategory] = useState({
    title: "",
   
  });

const {categoryId} = useParams ()
  const navigate = useNavigate();
  const [image, setImage] = useState({});
  const token = localStorage.getItem("token");
    const [errorM, setErrorM] = useState();
  const [successM, setSuccessM] = useState();

   useEffect (()=>{
    const getCategory =  async ()  => {
      const response = await axios.get (`http://localhost:5000/api/category/${categoryId}`)
      console.log(response)
      setCategory(response.data.categoria)
      setImage(response.data.categoria.image)
    }
    getCategory()
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
    setCategory({ ...category, [name]: value });
  };
  console.log(category)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:5000/api/category/${categoryId}`,
        { ...category, image },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(res.data);
      setSuccessM(res.data.message)
    // setTimeout(()=>{
    //   navigate(`/`)
        
    // }, 2000)
    } catch (error) {
      console.log(error.response)
      setErrorM(error.res.data.message)
        setTimeout(()=>{
            // window.location.href="/new_product"
            navigate("/new_category")
        }, 2000)
    }
  };

  return (
    <div>
      
      

      <h1 className="AddProduct">Modificar Categoria</h1>
      <div className="FormAP">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
          <label htmlFor="product">Categoria:</label>
            <input
              placeholder={category.title}
              name="title"             
              type="text"
              className="form-control"
              id="titleInput"
              onChange={handleChange}
            />
          </div>
         
          <div>

          {/* <select className="form-select" name="categoryId" onChange={handleChange} aria-label="Default select example">
                                <option selected>Selecciona...</option>
                                {categorias.map(e => (
                                    <option key={e._id} value={e._id}>{e.title}</option>

                                ))}
                            </select> */}
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
export default ModCategory;
