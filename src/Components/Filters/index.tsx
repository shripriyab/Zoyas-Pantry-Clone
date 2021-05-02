import outlineDone from "@iconify-icons/ic/outline-done";
import filter24Filled from "@iconify-icons/fluent/filter-24-filled";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { filters } from "../../data";
import "./Filters.css";
import SubFilters from "./SubFilters";

type selectedFilters = {
  [key: string]: string;
};

export default function Filters() {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [selectedFilters, setSelectedFilters] = useState<selectedFilters>({});

  const addFilter = (filter: string, subfilter: string) => {
    setSelectedFilters({
      ...selectedFilters,
      [filter]: selectedFilters[filter] === subfilter ? "" : subfilter,
    });
  };

  const filterTitle = isFilterOpen ? (
    <>
      <Icon icon={outlineDone} />
      <p>Done</p>
    </>
  ) : (
    <>
      <Icon icon={filter24Filled} />
      <p>Filter</p>
    </>
  );

  const filterClass = isFilterOpen ? "filter-list" : "hide-filter";
  return (
    <div className="filter-by">
      <div
        className="filter-title"
        onClick={() => setIsFilterOpen(!isFilterOpen)}
      >
        {filterTitle}
      </div>
      {isFilterOpen && (
        <ul className={filterClass}>
          {Object.keys(filters).map((filter) => (
            <SubFilters
              filters={filters}
              filter={filter}
              key={filter}
              addFilter={addFilter}
            />
          ))}
        </ul>
      )}

      {Object.values(selectedFilters).map((name, index) => (
        <div className="chip" key={`${name}_${index}`}>
          {name}
        </div>
      ))}
    </div>
  );
}
