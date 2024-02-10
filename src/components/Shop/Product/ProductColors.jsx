import { useState } from "react";
import classes from "./ProductColors.module.css";

const ProductColors = (props) => {
  const [pickedColor, setPickedColor] = useState(props.colors[0].name || '');

  const pickColorHandler = (color) => {
    setPickedColor(color.name);
    props.onClick(color)
  };

  const colors = props.colors.map((color) => (
    <span
      style={{ backgroundColor: color.code }}
      key={color.code}
      onClick={pickColorHandler.bind(null, color)}
      className={`${classes.color} ${
        pickedColor === color.name ? classes.active : ""
      }`}
    />
  ));

  return (
    <>
      <label htmlFor="color">
        <span className={classes.title}>Color: </span>
        {pickedColor}
      </label>
      <input type="hidden" name="color" id="color" value={pickedColor} />
      <div className={classes["colors-container"]}>{colors}</div>
    </>
  );
};

export default ProductColors;
