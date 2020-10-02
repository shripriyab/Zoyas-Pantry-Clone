import React, { Component } from "react";

import "./QuantitySelector.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

type QuantityProps = {};

type QuantityState = {
  quantity: number;
};

export default class QuantitySelector extends Component<
  QuantityProps,
  QuantityState
> {
  constructor(props: QuantityProps) {
    super(props);

    this.state = {
      quantity: 1,
    };
  }

  addQuantityToBag = (value: number) => {
    this.setState((prevState) => ({
      quantity: prevState.quantity + value,
    }));
  };

  render() {
    const { quantity } = this.state;
    const minusClass = quantity <= 1 ? "disabled" : "minus";
    return (
      <div className="quantity">
        <button
          type="button"
          className={minusClass}
          disabled={quantity <= 1}
          onClick={() => this.addQuantityToBag(-1)}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <div className="quantity-input">{quantity}</div>
        <button
          type="button"
          className="plus"
          onClick={() => this.addQuantityToBag(1)}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    );
  }
}
