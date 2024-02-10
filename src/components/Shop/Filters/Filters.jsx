import CategoryFilter from "./CategoryFilter";
import ColorFilter from "./ColorFilter";
import PriceFilter from "./PriceFilter";
import SortFilter from "./SortFilter";

import classes from "./Filters.module.css";

const Filters = ({ isFiltering }) => {
  return (
    <div
      className={`${classes["filter-container"]} ${
        isFiltering ? classes.appeared : undefined
      }`}
    >
      <CategoryFilter />
      <PriceFilter />
      <ColorFilter />
      <SortFilter />
    </div>
  );
};

export default Filters;
