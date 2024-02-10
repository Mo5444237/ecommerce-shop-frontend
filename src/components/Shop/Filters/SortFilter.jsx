import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import classes from "./Filters.module.css";

const SortFilter = (props) => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const [sortBy, setSortBy] = useState("default");
  const sorting = [
    { title: "default" },
    { title: "newness", field: "-createdAt" },
    { title: "price: low to high", field: "price" },
    { title: "price: high to low", field: "-price" },
  ];

  useEffect(() => {
    if (!params.get("sortBy")) setSortBy("default");
  });

  const selectSortHandler = (sort) => {
    setSortBy(sort.title);

    if (sort.title === "default") {
      params.delete("sortBy");
    } else {
      const sortField = sort.field || sort.title;
      params.delete("page");
      params.set("sortBy", sortField);
    }

    navigate(`/shop?${params.toString()}`);
  };

  return (
    <div className={classes.box}>
      <h1>Sort By</h1>
      <ul>
        {sorting.map((sort) => (
          <li key={sort.title}>
            <p
              onClick={selectSortHandler.bind(null, sort)}
              className={sort.title === sortBy ? classes.active : null}
            >
              {sort.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortFilter;
