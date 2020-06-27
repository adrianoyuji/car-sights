import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiChevronDown, mdiChevronUp, mdiFilter } from "@mdi/js";
const filterList = [
  { name: "All", value: "all" },
  { name: "High end", value: "high-end" },
  { name: "Medium", value: "medium" },
  { name: "Low end", value: "low-end" },
];

export default function Filters({ activeFilters, setActiveFilters }) {
  const [showFilter, setShowFilter] = useState(false);
  function handleChangeMin(event) {
    setActiveFilters({ ...activeFilters, minPrice: event.target.value });
  }
  function handleChangeMax(event) {
    setActiveFilters({ ...activeFilters, maxPrice: event.target.value });
  }

  return (
    <div className="filter">
      <div className="filterHeader" onClick={() => setShowFilter(!showFilter)}>
        <span className="filterHeaderTitle">
          <Icon path={mdiFilter} color="#000" size="18" />
          Filters
        </span>
        {showFilter ? (
          <Icon path={mdiChevronUp} color="black" size="24" />
        ) : (
          <Icon path={mdiChevronDown} color="black" size="24" />
        )}
      </div>
      <div className={showFilter ? "filterBodyShow" : "filterBodyHide"}>
        <div className="classFilter">
          Property class:{" "}
          {filterList.map((classItem, index) => (
            <span
              className={
                activeFilters.classType === classItem.value
                  ? "classButton selectedButton"
                  : "classButton"
              }
              onClick={() =>
                setActiveFilters({
                  ...activeFilters,
                  classType: classItem.value,
                })
              }
              key={index}
            >
              {classItem.name}
            </span>
          ))}
        </div>
        <div className="priceRange">
          Price Range
          <div className="priceInputs">
            <span className="inputTitles">Min price: </span>
            <input
              type="number"
              min="0"
              max="99999998"
              value={activeFilters.minPrice}
              onChange={handleChangeMin}
            />

            <span className="inputTitles">Max price: </span>
            <input
              type="number"
              min="1"
              max="99999999"
              value={activeFilters.maxPrice}
              onChange={handleChangeMax}
            />
          </div>
          <button
            onClick={() =>
              setActiveFilters({
                classType: "all",
                minPrice: 0,
                maxPrice: 99999999,
              })
            }
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
}
