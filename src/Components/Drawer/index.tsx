import React from "react";
import { Link } from "react-router-dom";
import { cart } from "../../data";
import Button from "../Button";
import QuantitySelector from "../QuantitySelector";
import "./Drawer.css";

export default function CartDrawer() {
  return (
    <div className="cart-drawer-wrapper">
      <div className="cart-drawer-content">
        <div className="cart-drawer-container">
          <h3 className="cart-drawer-title">My Bag</h3>
          <div className="cart-drawer-items">
            {cart.map((item) => (
              <div
                className="cart-drawer-item-row"
                key={`${item.title}_${item.weight}`}
              >
                <div className="cart-drawer-item-image">
                  <img src={item.imageUrl} alt={item.title} />
                </div>
                <div className="cart-drawer-item-info">
                  <div>{item.category}</div>
                  <div className="cart-drawer-item-main-details">
                    <div className="cart-drawer-item-title">
                      <p>{item.title}</p>
                      <p>{item.weight}</p>
                    </div>
                    <div>
                      <QuantitySelector margin={"0 55px"} />
                    </div>
                    <div className="cart-drawer-item-price">
                      <p>$678</p>
                    </div>
                  </div>
                  <div className="cart-drawer-item-additional">
                    <p className="cart-drawer-item-favourite">
                      <span>Add to Favourites</span>
                    </p>
                    <p className="cart-drawer-item-delete font-bold">
                      <span>Delete</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cart-subtotal-wrapper">
          <p>Subtotal</p>
          <p>$678</p>
        </div>
      </div>
      <div className="cart-drawer-actions">
        <div className="cart-drawer-continue">
          <Link to="/shop">Continue shopping</Link>
        </div>
        <Button link={"#"} text={"Checkout"} width={340} />
      </div>
    </div>
  );
}
