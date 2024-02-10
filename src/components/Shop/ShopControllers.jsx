import { useState } from "react";
import FilterIcon from "./Filters/FilterIcon";
import SearchIcon from "./Search/SearchIcon";
import classes from "./ShopControllers.module.css";

import { NavLink, useSearchParams } from "react-router-dom";
import Filters from "./Filters/Filters";
import SearchBar from "./Search/SearchBar";

const ShopControllers = () => {
  const [params] = useSearchParams();

  const [isFiltering, setIsFiltering] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isActive, setIsActive] = useState(params.get('category') ||  "all");

  const links = ["all", "men", "women", "accessories"];

  const isActiveHandler = (link) => {
    setIsActive(link);
  };

  const showSearchHandler = () => {
    setIsFiltering(false);
    setIsSearching((prevState) => !prevState);
  };

  const showFilterHandler = () => {
    setIsSearching(false);
    setIsFiltering((prevState) => !prevState);
  };

  return (
    <>
      <div className={classes["controllers-container"]}>
        <div className={classes.links}>
          {links.map((link) => (
            <NavLink
              to={link === "all" ? "/shop" : `/shop?category=${link}`}
              className={isActive === link ? classes.active : undefined}
              onClick={isActiveHandler.bind(null, link)}
              key={link}
            >
              {link}
            </NavLink>
          ))}
        </div>
        <div className={classes.icons}>
          <div
            className={isFiltering ? classes.active : undefined}
            onClick={showFilterHandler}
          >
            <FilterIcon />
            <p>Filter</p>
          </div>
          <div
            className={isSearching ? classes.active : undefined}
            onClick={showSearchHandler}
          >
            <SearchIcon />
            <p>Search</p>
          </div>
        </div>
      </div>
            
      {isSearching && <SearchBar isSearching/>}

      {isFiltering && <Filters isFiltering />}
    </>
  );
};

export default ShopControllers;
