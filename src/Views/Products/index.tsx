import React from "react";
import Filters from "../../Components/Filters";
import ProductsGrid from "../../Components/ProductsGrid";
import SortBy from "../../Components/SortBy";
import { shop } from "../../data";
import "./Products.css";

export default function Products() {
  return (
    <div className="products-container">
      <div className="inner-container">
        <div className="options">
          <Filters />
          <SortBy />
        </div>
        <ProductsGrid products={shop} isWishListView={false} />
      </div>
    </div>
  );
}
