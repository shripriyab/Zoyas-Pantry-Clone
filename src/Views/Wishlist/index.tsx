import React from "react";
import "./Wishlist.css";

import { wishlist } from "../../data";
import EmptyProducts from "../../Components/EmptyProducts";

function Wishlist() {
  return wishlist.length ? (
    <div>My Wishlist</div>
  ) : (
    <EmptyProducts titleText={"No products added to the wishlist."} />
  );
}

export default Wishlist;
