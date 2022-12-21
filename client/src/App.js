import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
// import Category from './components/Category/Category';
import Users from './components/Users/Users';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home'
import AddProduct from './components/Products/AddProduct';
import{BrowserRouter, Routes, Route} from "react-router-dom";
import Product from './components/Products/Product';
import AddCategory from './components/Category/AddCategory';
import CategoryId from './components/Category/CategoryId';
import Footer from './components/Footer/Footer';
import Logout from './components/Logout/Logout';
import ModProduct from './components/Products/ModProduct';
import ModCategory from './components/Category/ModCategory';
import ModUser from './components/Users/ModUser';
import User from './components/Users/User'
import Profile from './components/Users/Profile';
import About from './components/Home/About';

function App() {
  return (
    <div className="App">
      <Navbar/>
   <BrowserRouter>
   <Routes>
    <Route path="/" element = {<Home/>}/>
    <Route path="/login" element = {<Login/>}/>
    <Route path="/register" element = {<Register/>}/>
    <Route path="/new_product" element = {<AddProduct/>}/>
    <Route path="/products" element = {<Products/>}/>
    {/* <Route path="/categories" element = {<Category/>}/> */}
    <Route path="/product/:productId" element = {<Product/>}/>
    <Route path="/new_category" element = {<AddCategory/>}/>
    <Route path="/categories/:categoryId" element = {<CategoryId/>}/>
    <Route path="/users" element = {<Users/>}/>
    <Route path="/logout" element = {<Logout/>}/>
    <Route path="/modifyp/:productId" element = {<ModProduct/>}/>
    <Route path="/modify/:categoryId" element = {<ModCategory/>}/>
    <Route path="/modifyu/:userId" element = {<ModUser/>}/>
    <Route path="/profile" element = {<User/>}/>
    <Route path="/modify_profile" element = {<Profile/>}/>
    <Route path="/about" element = {<About/>}/>
   </Routes>
   </BrowserRouter>
   <Footer/>
    </div>
  );
}

export default App;
