import React from "react";

const filterList = [
  { name: "All", value: "all" },
  { name: "High end", value: "high-end" },
  { name: "Medium", value: "medium" },
  { name: "Low end", value: "low-end" },
];

export default function Filters({ activeFilters, setActiveFilters }) {
  return (
    <div className="filter">
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
    </div>
  );
}
