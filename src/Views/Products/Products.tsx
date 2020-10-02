import React, { Component } from "react";

import "./Products.css";

import ProductCard from "../../Components/ProductCard";
import { products } from "../../data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

type DataProps = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  category: string;
  inWishlist: boolean;
  inStock: boolean;
};

type ProductProps = {};

type ProductState = {
  isSortByActive: boolean;
};

export default class Products extends Component<ProductProps, ProductState> {
  constructor(props: ProductProps) {
    super(props);

    this.state = {
      isSortByActive: false,
    };
  }

  toggleSortOptions = () => {
    this.setState((prevState) => ({
      isSortByActive: !prevState.isSortByActive,
    }));
  };

  render() {
    const { isSortByActive } = this.state;
    return (
      <div className="products-container">
        <div className="inner-container">
          <div className="sort-by" onClick={() => this.toggleSortOptions()}>
            Our favorites{" "}
            <FontAwesomeIcon
              icon={isSortByActive ? faChevronUp : faChevronDown}
            />
            {isSortByActive && (
              <div className="order-list">
                <ul>
                  <li id="first-child">Our favorites</li>
                  <li>Sort by popularity</li>
                  <li>Sort by latest</li>
                  <li>Sort by price: low to high</li>
                  <li>Sort by price: high to low</li>
                </ul>
              </div>
            )}
          </div>
          <div className="product-display">
            {products.map(
              ({
                id,
                name,
                imageUrl,
                price,
                category,
                inWishlist,
                inStock,
              }: DataProps) => (
                <ProductCard
                  key={id}
                  name={name}
                  imageUrl={imageUrl}
                  price={price}
                  category={category}
                  inWishlist={inWishlist}
                  inStock={inStock}
                />
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}
