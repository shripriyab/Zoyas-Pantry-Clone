import filter24Filled from "@iconify-icons/fluent/filter-24-filled";
import outlineDone from "@iconify-icons/ic/outline-done";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { filters } from "../../data";
import "./Filters.css";
import SubFilters from "./SubFilters";
import closeIcon from "@iconify-icons/carbon/close";

type selectedFilters = {
  [key: string]: string;
};

export default function Filters() {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [selectedFilters, setSelectedFilters] = useState<selectedFilters>({});

  const addFilter = (filter: string, subfilter: string) => {
    const updatedFilters: selectedFilters = { ...selectedFilters };
    if (selectedFilters[filter] === subfilter) {
      delete updatedFilters[filter];
    } else {
      updatedFilters[filter] = subfilter;
    }
    setSelectedFilters(updatedFilters);
  };

  const deleteFilter = (filter: string) => {
    const updatedFilters: selectedFilters = { ...selectedFilters };
    delete updatedFilters[filter];
    setSelectedFilters(updatedFilters);
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

  const filterClass = isFilterOpen ? "filter-body" : "hide-filter";
  return (
    <div className="filter-by">
      <div
        className="filter-title"
        onClick={() => setIsFilterOpen(!isFilterOpen)}
      >
        {filterTitle}
      </div>

      <div className={filterClass}>
        {isFilterOpen && (
          <ul>
            {Object.keys(filters).map((filter) => (
              <SubFilters
                filters={filters}
                filter={filter}
                key={filter}
                addFilter={addFilter}
                selectedFilters={selectedFilters}
              />
            ))}
          </ul>
        )}

        <div className="filters-array">
          {Object.keys(selectedFilters).map((filter) => (
            <div className="chip" key={filter}>
              {selectedFilters[filter]}
              <div className="close-icon" onClick={() => deleteFilter(filter)}>
                <Icon icon={closeIcon} />
              </div>
            </div>
          ))}
        </div>

        {!!Object.values(selectedFilters).length && (
          <div className="clear-all">
            <span onClick={() => setSelectedFilters({})}>Clear All</span>
          </div>
        )}
      </div>
    </div>
  );
}
