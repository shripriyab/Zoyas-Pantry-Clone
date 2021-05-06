import React from "react";
import EmptyProducts from "../../Components/EmptyProducts";
import ProductsGrid from "../../Components/ProductsGrid";
import { wishlist } from "../../data";
import "./Wishlist.css";

export default function Wishlist() {
  return wishlist.length ? (
    <div className="wishlist-container">
      <div className="wishlist-title">My Wishlist</div>
      <ProductsGrid products={wishlist} isWishListView={true} />
    </div>
  ) : (
    <EmptyProducts titleText={"No products added to the wishlist."} />
  );
}
