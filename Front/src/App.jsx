import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Offer from "./pages/Offer";
import Login from "./pages/Login";
import Deal from "./pages/Deal";
import Register from "./pages/Register";
import Forgotpassword from "./Components/Forgotpassword";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Offer />} />
        <Route path="/deals" element={<Deal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<Forgotpassword />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
