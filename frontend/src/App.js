import "./App.css";

import Header from "./components/Header";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:paramId" element={<ProductDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
