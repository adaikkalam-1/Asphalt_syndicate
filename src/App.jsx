import { Route, Routes } from "react-router-dom";
import "./app.css";
import Navbar from "./pages/navbar/Navbar";
import Header from "./pages/header/Header";
import About from "./pages/about/About";
import Product from "./pages/product/Product";
import Client from "./pages/clients/Client";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/clients" element={<Client />} />
      </Routes>
    </>
  );
};

export default App;
