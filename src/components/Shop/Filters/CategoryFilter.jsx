import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import classes from "./Filters.module.css";

const CategoryFilter = (props) => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = ["all", "hoodies", "jeans", "jackets", "shoes"];

  useEffect(() => {
    if (!params.get('subCategory'))
      setSelectedCategory('all');
  })

  const selectCategoryHandler = (category) => {
    setSelectedCategory(category);

    if (category === "all") {
      params.delete("subCategory");
    } else {
      params.delete("page");
      params.set("subCategory", category);
    }
    navigate(`/shop?${params.toString()}`);
  };

  return (
    <div className={classes.box}>
      <h1>Category</h1>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <p
              onClick={selectCategoryHandler.bind(null, category)}
              className={selectedCategory === category ? classes.active : null}
            >
              {category}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
