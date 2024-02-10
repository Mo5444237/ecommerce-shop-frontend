import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import classes from "./Filters.module.css";

const ColorFilter = (props) => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const [selectedColor, setSelectedColor] = useState("all");
  const colors = [
    { name: "all" },
    { name: "black", code: "#000" },
    { name: "white", code: "#fff" },
    { name: "navy", code: "#202a44" },
    { name: "gray", code: "gray" },
  ];

  useEffect(() => {
    if (!params.get("color")) setSelectedColor("all");
  });

  const selectColorHandler = (color) => {
    setSelectedColor(color);

    if (color === "all") {
      params.delete("color");
    } else {
      params.delete("page");
      params.set("color", color);
    }
    navigate(`/shop?${params.toString()}`);
  };

  return (
    <div className={`${classes.box} ${classes.colors}`}>
      <h1>Color</h1>
      <ul>
        {colors.map((color) => (
          <li key={color.code}>
            <span
              style={
                color.code
                  ? { backgroundColor: color.code }
                  : { borderColor: "transparent" }
              }
            ></span>
            <p
              onClick={selectColorHandler.bind(null, color.name)}
              className={selectedColor === color.name ? classes.active : null}
            >
              {color.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorFilter;
