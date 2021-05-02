import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

type ButtonProps = {
  text: string;
  width: number;
};

export default function Button({ text, width }: ButtonProps) {
  return (
    <div className="custom-button">
      <Link to="#" style={{ width: `${width}px` }}>
        {text}
      </Link>
    </div>
  );
}
