import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./scss/app.scss";

import Header from "./components/header";
import Home from "./components/pages/home";
import Cart from "./components/pages/cart";
import NotFound from "./components/pages/notFound";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/сart" element={<Cart />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
