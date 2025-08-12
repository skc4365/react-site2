import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
// import { useState } from "react";
import "./App.css";
import Login from "./compo/Login";
import Home from "./compo/Home";
import Layout from "./compo/Layout";

function App() {

  return (
    <>
      <h1>과제방</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/react-site2/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="/react-site2/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
