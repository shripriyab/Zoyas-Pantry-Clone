import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import ProductCard from "../../Components/ProductCard";
import { products } from "../../data";
import "./Products.css";

type DataProps = {
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
                title,
                category,
                imageUrl,
                weight,
                price,
                inStock,
              }: DataProps) => (
                <ProductCard
                  key={title}
                  title={title}
                  category={category}
                  imageUrl={imageUrl}
                  weight={weight}
                  price={price}
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
