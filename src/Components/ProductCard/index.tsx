import deleteBin6Line from "@iconify-icons/ri/delete-bin-6-line";
import heartLine from "@iconify/icons-clarity/heart-line";
import { Icon } from "@iconify/react";
import React from "react";
import Button from "../Button";
import OutOfStock from "../OutofStockButton";
import "./ProductCard.css";

type ProductCardProps = {
  title: string;
  category: string;
  imageUrl: string;
  weight: string;
  price: number;
  inStock: boolean;
  isWishListView: boolean;
};

export default function ProductCard({
  title,
  imageUrl,
  weight,
  price,
  category,
  inStock,
  isWishListView,
}: ProductCardProps) {
  const addButton = inStock ? (
    <Button text={"Add to Bag"} width={115} />
  ) : (
    <OutOfStock />
  );
  const productAction = isWishListView ? deleteBin6Line : heartLine;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="product-action">
        <Icon icon={productAction} />
      </div>
      <div className="product-details">
        <div className="product-category">{category}</div>
        <div className="product-name">{title}</div>
        <div className="product-order">
          <div className="product-price">${price}</div>
          <div>{addButton}</div>
        </div>
      </div>
    </div>
  );
}
