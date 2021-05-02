import React, { useState } from "react";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SubFilters.css";
type SubFilterProps = {
  filters: Filters;
  filter: string;
  addFilter: (filter: string, subfilter: string) => void;
};

type Filters = {
  [key: string]: string[];
};

export default function SubFilters({
  filters,
  filter,
  addFilter,
}: SubFilterProps) {
  const [isSubFilterOpen, setIsSubFilterOpen] = useState<boolean>(false);

  return (
    <li key={filter} className="filter-section">
      <div
        className="filter-section-title"
        onClick={() => setIsSubFilterOpen(!isSubFilterOpen)}
      >
        <h4>{filter}</h4>
        <FontAwesomeIcon icon={isSubFilterOpen ? faChevronUp : faChevronDown} />
      </div>
      {isSubFilterOpen && (
        <div className="subfilters">
          {filters[filter].map((subfilter) => (
            <div key={subfilter}>
              <span
                className="subfilter"
                onClick={() => addFilter(filter, subfilter)}
              >
                {subfilter}
              </span>
            </div>
          ))}
        </div>
      )}
    </li>
  );
}
