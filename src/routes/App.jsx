import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Carousel from "../containers/Carousel";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Orders from "../pages/Orders";
import Profile from "../pages/Profile";
import Search from "../pages/Search";

const App = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Carousel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<Layout />}>
          <Route path="/app/home" element={<Home />} />
          <Route path="/app/search" element={<Search />} />
          <Route path="/app/orders" element={<Orders />} />
          <Route path="/app/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
