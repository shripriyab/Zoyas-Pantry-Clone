import React from "react";
import ProductCard from "../../Components/ProductCard";
import "./ProductsGrid.css";

type Product = {
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

type ProductsGridProps = {
  products: Array<Product>;
  isWishListView: boolean;
};

export default function ProductsGrid({
  products,
  isWishListView,
}: ProductsGridProps) {
  return (
    <div className="product-display">
      {products.map(
        ({ title, category, imageUrl, weight, price, inStock }: Product) => (
          <ProductCard
            key={title}
            title={title}
            category={category}
            imageUrl={imageUrl}
            weight={weight}
            price={price}
            inStock={inStock}
            isWishListView={isWishListView}
          />
        )
      )}
    </div>
  );
}
