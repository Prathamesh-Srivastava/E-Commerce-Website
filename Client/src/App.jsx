import React from "react";
import Home from "./Pages/HomePage";
import Register from "./Pages/Register";
import ProductList from "./Pages/ProductList"
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Payment from "./Pages/Payment";

import {BrowserRouter as Router,
        Routes,
        Route,
      } from "react-router-dom";

export default function App(){
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<SingleProduct/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Payment />} />
      </Routes>
    </Router>
  )
}