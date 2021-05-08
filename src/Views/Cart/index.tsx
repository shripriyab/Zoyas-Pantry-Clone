import React from "react";
import Button from "../../Components/Button";
import EmptyProducts from "../../Components/EmptyProducts";
import QuantitySelector from "../../Components/QuantitySelector";
import { cart } from "../../data";
import "./Cart.css";

type CartProps = {
  quantity: number;
};

export default function Cart({ quantity }: CartProps) {
  quantity = 1;
  return quantity ? (
    <div className="cart-container">
      <div className="cart-title">My Bag</div>
      <div className="cart-body">
        <table className="products-summary">
          <thead className="products-summary-heading">
            <th className="product-heading">Product</th>
            <th className="price-heading">Price</th>
            <th className="quantity-heading">Quantity</th>
            <th className="delete-heading"></th>
            <th className="total-heading text-align-center">Total Price</th>
          </thead>
          {cart.map((item) => (
            <tr className="items-rows" key={`${item.title}_${item.weight}`}>
              <td className="item">
                <img src={item.imageUrl} alt={item.title} />
                <div className="item-info">
                  <p>{item.category}</p>
                  <div className="item-title">
                    <p>{item.title}</p>
                    <p>{item.weight}</p>
                  </div>
                  <p>
                    <span>Add to Favourites</span>
                  </p>
                </div>
              </td>
              <td>
                <p className="item-price">${item.price}</p>
              </td>
              <td>
                <QuantitySelector margin={"0"} />
              </td>
              <td>
                <p className="item-delete">
                  <span>Delete</span>
                </p>
              </td>
              <td>
                <p className="item-price">$678</p>
              </td>
            </tr>
          ))}
        </table>
        <div className="order-summary">
          <p className="order-summary-heading">Order Summary</p>
          <div className="price-values">
            <div className="prices-value-row">
              <p>Subtotal</p>
              <p>$56.56</p>
            </div>
            <div className="prices-value-row">
              <p>Shipping</p>
              <p>$34</p>
            </div>
            <div className="prices-value-row total-cart-price">
              <p>Total</p>
              <p>$567</p>
            </div>
          </div>
          <Button link={"#"} text={"Proceed to checkout"} width={340} />
        </div>
      </div>
    </div>
  ) : (
    <EmptyProducts titleText={"Your Shopping Bag is Empty."} />
  );
}
