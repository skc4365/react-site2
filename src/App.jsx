import { BrowserRouter, HashRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
// import { useState } from "react";
import "./App.css";
import Login from "./compo/Login";
import Home from "./compo/Home";
import Layout from "./compo/Layout";
import Work1 from "./compo/Work1";

function App() {

  return (
    <>
      <h1>과제방</h1>
      <HashRouter>
        <Routes>
          <Route path="/react-site2/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="/react-site2/login/" element={<Login />} />
          <Route path="/react-site2/work1/" element={<Work1 />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
