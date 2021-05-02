import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Views/Home";
import Login from "./Views/Login";
import Product from "./Views/Product";
import Products from "./Views/Products";
import Register from "./Views/Register";
import Wishlist from "./Views/Wishlist";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="body">
          <Route path="/" exact component={Home} />
          <Route path="/category" exact component={Products} />
          <Route path="/product/:name" exact component={Product} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/wishlist" exact component={Wishlist} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
