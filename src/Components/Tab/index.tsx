import React from "react";
import "./Tab.css";

type TabProps = {
  tabName: string;
  index: number;
  handleTabClick: (index: number) => void;
  isActive: boolean;
};

export default function Tab({
  tabName,
  index,
  handleTabClick,
  isActive,
}: TabProps) {
  const tabClass = isActive ? "active" : "";
  return (
    <div className={`tab ${tabClass}`} onClick={() => handleTabClick(index)}>
      <p>{tabName}</p>
    </div>
  );
}
