import React from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Views/Home";
import Products from "./Views/Products";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/product-category" exact component={Products} />
      </BrowserRouter>
    </div>
  );
}

export default App;
