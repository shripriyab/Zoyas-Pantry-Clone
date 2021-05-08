import React from "react";
import Button from "../../Components/Button";
import "./EmptyProducts.css";
import logo from "./noProducts.svg";

type EmptyProductsProps = {
  titleText: string;
};

export default function EmptyProducts({ titleText }: EmptyProductsProps) {
  return (
    <div className="empty-products">
      <div className="empty-products-title">
        <p>{titleText}</p>
        <img src={logo} alt="logo" className="empty-products-logo" />
      </div>

      <div className="empty-products-info">
        <p>Looks like you haven't made your choice yet.</p>
        <p>Start adding items!</p>
      </div>
      <Button link={"/category"} text={"Explore the range"} width={200} />
    </div>
  );
}
