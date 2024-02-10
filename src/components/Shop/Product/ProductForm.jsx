import classes from "./ProductForm.module.css";

import ProductColors from "./ProductColors";
import ProductSizes from "./ProductSizes";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddToCart } from "../../../store/cart-actions";
import { getToken } from "../../../utils/auth";
import { uiActions } from "../../../store/ui-slice";
import { useNavigate } from "react-router-dom";
import baseUrl from "../../../services/baseUrl";

const ProductForm = ({ product, ...props }) => {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(product.colors[0]);
  const [size, setSize] = useState(product.sizes[0]);
  const [showImg, setShowImage] = useState(product.images[0]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setColorHandler = (color) => {
    setColor(color);
  };

  const setSizeHandler = (size) => {
    setSize(size);
  };

  const showImageHandler = (img) => {
    setShowImage(img);
  };

  const addToCartHandler = (e) => {
    e.preventDefault();
    if (!getToken()) {
      dispatch(uiActions.setUiChanged(true));
      dispatch(
        uiActions.addNotification({
          status: "info",
          title: "Info",
          message: "Please Login first.",
        })
      );
      navigate('/auth?mode=login')
      return;
    }

    dispatch(
      AddToCart({
        productId: product._id,
        color: color,
        size: size,
        quantity: quantity,
      })
    );
  };

  return (
    <form onSubmit={addToCartHandler} className={classes["product-container"]}>
      <div className={classes["product-images"]}>
        <div className={classes["main-image"]}>
          <img src={`${baseUrl}/${showImg}`} alt="product-image" />
        </div>
        <div className={classes["other-images"]}>
          {product.images.map((img) => (
            <img
              src={`${baseUrl}/${img}`}
              alt="product-image"
              onClick={showImageHandler.bind(null, img)}
              key={img}
              className={`${img === showImg ? classes.active : null}`}
            />
          ))}
        </div>
      </div>
      <div className={classes["product-details"]}>
        <div>
          <h2 className={classes.title}>{product.name}</h2>
          <p className={classes.price}>${product.price}</p>
          <p className={classes.description}>{product.description}</p>
        </div>
        <div>
          <div className={classes.colors}>
            <ProductColors colors={product.colors} onClick={setColorHandler} />
          </div>
          <div className={classes.sizes}>
            <ProductSizes sizes={product.sizes} onClick={setSizeHandler} />
          </div>
        </div>
        <div>
          <div className={classes.quantity}>
            <div className={classes["quantity-button"]}>
              <p>Quantity</p>
              <div>
                <button
                  type="button"
                  disabled={quantity === 1}
                  onClick={() => setQuantity((q) => q - 1)}
                >
                  -
                </button>
                <div className={classes.count}>{quantity}</div>
                <button type="button" onClick={() => setQuantity((q) => q + 1)}>
                  +
                </button>
              </div>
            </div>
          </div>
          <div className={classes.actions}>
            <button type="submit">Add to cart</button>
            {props.children}
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
