import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./QuantitySelector.css";

function QuantitySelector() {
  const [quantity, setQuantity] = useState<number>(1);

  const updateQuantityToBag = (value: number) => {
    setQuantity((quantity) => quantity + value);
  };

  const minusClass = quantity <= 1 ? "disabled" : "minus";

  return (
    <div className="quantity">
      <button
        type="button"
        className={minusClass}
        disabled={quantity <= 1}
        onClick={() => updateQuantityToBag(-1)}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <div className="quantity-input">{quantity}</div>
      <button
        type="button"
        className="plus"
        onClick={() => updateQuantityToBag(1)}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}

export default QuantitySelector;
