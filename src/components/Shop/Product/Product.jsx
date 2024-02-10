import classes from "./Product.module.css";

import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../../UI/Button";
import ProductPreview from "./ProductPreview";

import baseUrl from "../../../services/baseUrl";

const Product = ({ className, product }) => {
  const [preview, setPreview] = useState(false);

  const showProductHandler = () => {
    setPreview(true);
  };

  const hideProductHandler = () => {
    setPreview(false);
  };

  return (
    <div className={`${classes.container} ${className}`}>
      <div className={classes["product-image"]}>
        <div className={classes["image-container"]}>
          <img
            src={`${baseUrl}/${product.images[0]}`}
            alt={product.title}
          />
        </div>
        <div className={classes.actions}>
          <Button title="Preview" onClick={showProductHandler} />
        </div>
      </div>
      <div className={classes["product-data"]}>
        <Link to={`/products/${product._id}`}>{product.name}</Link>
        <span>${product.price}</span>
      </div>
      {preview && (
        <ProductPreview product={product} onHideProduct={hideProductHandler} />
      )}
    </div>
  );
};

export default Product;
