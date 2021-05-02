import React from "react";
import EmptyProducts from "../../Components/EmptyProducts";

export default function Cart() {
  return (
    <div>
      <EmptyProducts titleText={"Your Shopping Bag is Empty."} />
    </div>
  );
}
