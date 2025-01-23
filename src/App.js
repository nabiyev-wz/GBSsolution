import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={<ProductDetails />}></Route>
          <Route path='About' element={<About />}></Route>

        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;