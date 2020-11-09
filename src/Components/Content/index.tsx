import React from "react";

import "./Content.css";

type ContentProps = {
  data: string;
};

export default function Content({ data }: ContentProps) {
  return <div className="content">{data}</div>;
}
