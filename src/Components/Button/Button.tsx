import React from "react";

import "./Button.css";

type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  return (
    <div className="custom-button">
      <button type="submit">{text}</button>
    </div>
  );
}
