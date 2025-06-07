import React from "react";
import LandingPage from "./Components/LandingPage/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetailCard from "./Components/ProductCard/ProductDetailCard";
import NavBar from "./Components/NavBar/NavBar";

const App = () => {
  return (
    <div>
       <NavBar/>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          {/* <Route path="contact" element={<Contact />} /> */}
        </Route>
        <Route path="product-details" element={<ProductDetailCard />} />
      </Routes>
    </div>
  );
};

export default App;
