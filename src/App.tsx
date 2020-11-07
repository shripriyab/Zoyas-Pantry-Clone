import React from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Views/Home";
import Login from "./Views/Login";
import Register from "./Views/Register";
import Products from "./Views/Products";
import ProductData from "./Views/ProductData";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/category" exact component={Products} />
        <Route path="/product/:name" exact component={ProductData} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </BrowserRouter>
    </div>
  );
}

export default App;
