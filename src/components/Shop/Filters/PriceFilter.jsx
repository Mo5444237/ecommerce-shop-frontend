import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import classes from "./Filters.module.css";

const PriceFilter = (props) => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const [price, setPrice] = useState("all");
  const prices = [
    "all",
    { min: 0, max: 50 },
    { min: 50, max: 100 },
    { min: 150, max: 200 },
    { min: 250 },
  ];

  useEffect(() => {
    if (!params.get("minPrice")) setPrice("all");
  });

  const selectPriceHandler = (price) => {
    setPrice(price);

    if (price.min === undefined) {
      params.delete("minPrice");
      params.delete("maxPrice");
    } else {
      params.delete("page");
      params.set("minPrice", price.min);
      params.set("maxPrice", price.max);
    }
    if (price.max === undefined) params.delete("maxPrice");

    navigate(`/shop?${params.toString()}`);
  };

  return (
    <div className={classes.box}>
      <h1>Price</h1>
      <ul>
        {prices.map((p) => (
          <li key={p.min ?? p}>
            <p
              onClick={selectPriceHandler.bind(null, p)}
              className={price.min === p.min ? classes.active : null}
            >
              {p.min ?? "all"} {p.max && `- ${p.max}`}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceFilter;
