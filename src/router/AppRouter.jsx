import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Shop from "../pages/Shop/Shop";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import Contact from "../pages/Contact/Contact";
import SupsCribe from "../pages/supscribe/SupsCribe";
import ErrorPage from "../pages/Error/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Account from "../pages/Account/Account";
import MyAccount from "../pages/MyAccount/MyAccount";
import SingleCard from "../components/SingleCard/SingleCard";
import Dashboard from "../pages/Dashboard/Dashboard";
import Basket from "../pages/Basket/Basket";
import Details from "../pages/Details/Details";
import AddProduct from "../pages/Dashboard/AddProduct";
import EditProduct from "../pages/Dashboard/EditProduct";
import Wishlist from "../pages/Wishlist/Wishlist";
import '../supabase';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CheckOut from "../pages/CheckOut/CheckOut";
import SuccsessPayment from "../pages/SuccsessPayment/SuccsessPayment";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover={false}
          theme="dark"
        />
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

const AppRouter = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Shop />} path="/shop" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<ErrorPage />} path="*" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<Account />} path="/account" />
        <Route element={<MyAccount />} path="/myaccount" />
        <Route element={<Dashboard />} path="/dashboard" />
        <Route element={<Wishlist />} path="/wishlist" />
        <Route element={<Basket />} path="/basket" />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/editproduct/:id" element={<EditProduct />} />
        <Route path="/products/:id" element={<Details />} />
        <Route element={<SingleCard />} path="/singlecard/:id" />
        <Route element={<CheckOut />} path="/checkout" />
        <Route element={<SuccsessPayment/>} path="/successpayment"/>
      </Routes>
      
      <SupsCribe />
      <Footer />
    </>
  );
};

