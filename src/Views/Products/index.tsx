import React from "react";
import Filters from "../../Components/Filters";
import ProductCard from "../../Components/ProductCard";
import SortBy from "../../Components/SortBy";
import { products } from "../../data";
import "./Products.css";

type DataProps = {
  title: string;
  category: string;
  imageUrl: string;
  weight: string;
  price: number;
  meta: Metadata;
  tags: Array<string>;
  inStock: boolean;
  description: Description;
};

type Description = {
  productInformation: string;
  storageInstruction: string;
  shippingInformation: string;
};

type Metadata = {
  sku: string;
  brand: string;
};

export default function Products() {
  return (
    <div className="products-container">
      <div className="inner-container">
        <div className="options">
          <Filters />
          <SortBy />
        </div>
        <div className="product-display">
          {products.map(
            ({
              title,
              category,
              imageUrl,
              weight,
              price,
              inStock,
            }: DataProps) => (
              <ProductCard
                key={title}
                title={title}
                category={category}
                imageUrl={imageUrl}
                weight={weight}
                price={price}
                inStock={inStock}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
