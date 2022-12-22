import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BsArrowLeftSquare } from "react-icons/bs"
import { Link } from "react-router-dom";


const AddCategory = () => {
  const [category, setCategory] = useState({
    title: "",
  });

  const [image, setImage] = useState({});
  const token = localStorage.getItem("token");
  const [errorM, setErrorM] = useState(null);
  const [successM, setSuccessM] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault()

    try {
      const file = e.target.files[0]
      if (!file) return alert("No se ha subido la imagen")

      let formData = new FormData()
      formData.append("file", file)
      const response = await axios.post("http://localhost:5000/api/upload", formData, {
        headers: {
          Authorization: token,
          "content-type": "multipart/form-data",
        }
      })

      console.log(response)
      setImage(response.data)
      setSuccessM(response.data.message)

    } catch (error) {
      console.log(error.response)
      setErrorM(error.response.data.message)
    }
  }
  const handleChange = async (e) => {
    const { name, value } = e.target
    setCategory({ ...category, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:5000/api/category",
        { ...category, image },
        {
          headers: {
            Authorization: token
          }
        });
      console.log(res)
      setSuccessM(res.data.message)
      setTimeout(() => {
        window.location.href = "/new_category"
      }, 3000)
    } catch (error) {
      setErrorM(error.res.data.message)
      setTimeout(() => {
        window.location.href = "/new_category"
      }, 2000)
    }
  }

  return (
    <div>



      <h1 className="AddCategory">Añadir categoria</h1>
      <div className="FormAC">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              placeholder="Title"
              name="title"
              value={category.title}
              type="text"
              className="form-control"
              id="titleInput"
              onChange={handleChange}
            />
            <input type="file" name="file" onChange={handleUpload} className="fotoC" />
            <img src={image.url} className="PhotoC" />
          </div>


          <button type="submit" className="btn btn-primary buttonAC" style={{ backgroundColor: "#c67100" }}>
            Add
          </button>
          <div className="arrow">
                  <Link to={"/"}>
                  < BsArrowLeftSquare/>
                  </Link>
                  </div>
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
  )
};

export default AddCategory;