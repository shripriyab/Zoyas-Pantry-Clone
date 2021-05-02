import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { sortOptions } from "../../data";
import "./SortBy.css";

export default function SortBy() {
  const [isSortOpen, setIsSortOpen] = useState<boolean>(false);

  return (
    <div className="sort-by" onClick={() => setIsSortOpen(!isSortOpen)}>
      Our favorites
      <FontAwesomeIcon icon={isSortOpen ? faChevronUp : faChevronDown} />
      {isSortOpen && (
        <div className="order-list">
          <ul>
            {sortOptions.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
