import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

type ButtonProps = {
  link: string;
  text: string;
  width: number;
};

export default function Button({ link, text, width }: ButtonProps) {
  return (
    <div className="custom-button">
      <Link to={link} style={{ width: `${width}px` }}>
        {text}
      </Link>
    </div>
  );
}
