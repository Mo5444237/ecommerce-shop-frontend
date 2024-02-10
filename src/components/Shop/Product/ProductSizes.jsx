import { useState } from "react";
import classes from "./ProductSizes.module.css";

const ProductSizes = (props) => {
  const [pickedSize, setPickedSize] = useState(props.sizes[0] || '');

  const pickSizeHandler = (size) => {
    setPickedSize(size);
    props.onClick(size);
  };


  const sizes = props.sizes.map((size) => (
    <span
      key={size}
      onClick={pickSizeHandler.bind(null, size)}
      className={`${classes.size} ${
        pickedSize === size ? classes.active : ""
      }`}
      >
          {size}
    </span>
  ));

  return (
    <>
      <label htmlFor="size">
        <span className={classes.title}>Size: </span>
        {pickedSize}
      </label>
      <input type="hidden" name="size" id="size" value={pickedSize} />
      <div className={classes["sizes-container"]}>{sizes}</div>
    </>
  );
};

export default ProductSizes;
