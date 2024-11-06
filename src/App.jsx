import { Route, Routes } from "react-router-dom";
import "./app.css";
import Navbar from "./pages/navbar/Navbar";
import Header from "./pages/header/header";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </>
  );
};

export default App;
