import React from "react";

import "./ProductCard.css";

import { Icon } from "@iconify/react";
import heartLine from "@iconify/icons-clarity/heart-line";
import heartSolid from "@iconify/icons-clarity/heart-solid";

import Button from "../Button";
import OutOfStock from "../OutofStockButton";

type ProductCardProps = {
  name: string;
  imageUrl: string;
  price: number;
  category: string;
  inWishlist: boolean;
  inStock: boolean;
};

export default function ProductCard({
  name,
  imageUrl,
  price,
  category,
  inWishlist,
  inStock,
}: ProductCardProps) {
  let addButton = inStock ? (
    <Button text={"Add to Bag"} width={115} />
  ) : (
    <OutOfStock />
  );
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="wishlist">
        <Icon icon={inWishlist ? heartSolid : heartLine} />
      </div>
      <div className="product-details">
        <div className="product-category">{category}</div>
        <div className="product-name">{name}</div>
        <div className="product-order">
          <div className="product-price">${price}</div>
          <div>{addButton}</div>
        </div>
      </div>
    </div>
  );
}
