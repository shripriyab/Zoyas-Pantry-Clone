import React, { useState } from "react";
import Button from "../../Components/Button";
import logo from "./noProducts.svg";
import "./Wishlist.css";

import { wishlist } from "../../data";

function Wishlist() {
  wishlist.length = 0;
  return wishlist.length ? (
    <div>My Wishlist</div>
  ) : (
    <div className="wishlist-empty">
      <div className="wishlist-title">
        <p>No products added to the wishlist.</p>
        <img src={logo} alt="logo" />
      </div>

      <div className="wishlist-info">
        <p>Looks like you haven't made your choice yet.</p>
        <p>Start adding items!</p>
      </div>
      <Button text={"Explore the range"} width={200} />
    </div>
  );
}

export default Wishlist;
