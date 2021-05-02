import heartLine from "@iconify/icons-clarity/heart-line";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Button from "../../Components/Button";
import Content from "../../Components/Content";
import QuantitySelector from "../../Components/QuantitySelector";
import Tab from "../../Components/Tab";
import "./Product.css";

const data = {
  title: "100% Pure Maple Syrup Glass Handled 189mL",
  category: "Sugars, Sweetners & Syrups",
  imageUrl:
    "https://zoyaspantry.com.au/wp-content/uploads/2020/05/9339337006265@2x-min.jpg",
  weight: "189mL",
  shortDescription:
    "Our 100% pure maple syrup is sourced from natural Canadian maple trees, is rich in flavour, and a healthier substitute to sugar. Drizzle on pancakes, waffles, yogurt, ice cream, oatmeal and more.",
  price: 7.95,
  meta: { sku: "SYRUPS005", brand: "Chiefs choice" },
  tags: ["Kosher", "Vegan"],
  inStock: true,
  description: {
    productInformation:
      "Our 100% pure maple syrup is sourced from natural Canadian maple trees, is rich in flavour, and a healthier substitute to sugar. Drizzle on pancakes, waffles, yogurt, ice cream, oatmeal and more.",
    storageInstruction:
      "Store in cool & dry place, after opening, see product label for storage instruction details.",
    shippingInformation:
      "Your order will be packed and shipped within 1 business day and click here for shipping details.",
  },
};

type tagsType = {
  [key: string]: string;
};

const tags: tagsType = {
  Kosher: "https://zoyaspantry.com.au/wp-content/uploads/2020/05/kosher.svg",
  Vegan: "https://zoyaspantry.com.au/wp-content/uploads/2020/05/vegan-2.svg",
  Organic:
    "https://zoyaspantry.com.au/wp-content/uploads/2020/05/Zoyas-Pantry_icons-40.svg",
};

const descriptionTabs = [
  "Product Information",
  "Storage Instruction",
  "Shipping Information",
];

export default function Product() {
  const [activeTab, setActiveTab] = useState<Number>(0);

  const handleTabClick = (currTab: Number) => {
    if (activeTab === currTab) return;
    setActiveTab(currTab);
  };

  return (
    <div className="product-page-container">
      <div className="breadcrumbs">
        <h3>Home Pantry</h3>
      </div>
      <div className="product-container">
        <div className="product-page-image">
          <div className="product-page-heart">
            <Icon icon={heartLine} />
          </div>
          <img src={data.imageUrl} alt={data.title} />
        </div>
        <div className="product-page-details">
          <h1 className="product-page-title">{data.title}</h1>
          <h3 className="product-page-weight">{data.weight}</h3>
          <p className="product-page-description">{data.shortDescription}</p>
          <div className="product-page-tags">
            {data.tags.map((tag) => (
              <div className="product-tag">
                <img src={tags[tag]} alt={tag} />
                <p>{tag}</p>
              </div>
            ))}
          </div>
          <div className="product-page-action">
            <h3 className="product-page-price">${data.price}</h3>
            <QuantitySelector />
            <Button text="Add to Bag" width={250} />
          </div>
          <div className="product-page-meta">
            <p>
              Sku:<span className="meta-data">{data.meta.sku}</span>
            </p>
            <p>
              Brand:<span className="meta-data">{data.meta.brand}</span>
            </p>
          </div>
          <div>
            <div className="tabs">
              {descriptionTabs.map((tab, index) => (
                <Tab
                  key={tab}
                  tabName={tab}
                  index={index}
                  handleTabClick={handleTabClick}
                  isActive={activeTab === index}
                />
              ))}
            </div>

            {activeTab === 0 && (
              <Content data={data.description.productInformation} />
            )}
            {activeTab === 1 && (
              <Content data={data.description.storageInstruction} />
            )}
            {activeTab === 2 && (
              <Content data={data.description.shippingInformation} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
