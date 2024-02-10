import classes from "./CartItem.module.css";

import { Link } from "react-router-dom";

import {
  AddToCart,
  RemoveFromCart,
  decreaseFromCart,
} from "../../store/cart-actions";
import { useDispatch } from "react-redux";

import baseUrl from "../../services/baseUrl";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      AddToCart({
        productId: cartItem.productId._id,
        color: cartItem.color,
        size: cartItem.size,
      })
    );
  };

  const DecreaseFromCartHandler = () => {
    dispatch(decreaseFromCart({ productId: cartItem._id }));
  };

  const removeFromCartHandler = () => {
    dispatch(RemoveFromCart({ productId: cartItem._id }));
  };

  return (
    <div className={classes["cart-item"]}>
      <div className={classes["cart-product"]}>
        <img
          src={`${baseUrl}/${cartItem.productId.images[0]}`}
          alt={cartItem.productId.name}
        />
        <div>
          <Link to={`/product/${cartItem.productId._id}`}>
            {cartItem.productId.name}
          </Link>
          <p>
            Size: <span>{cartItem.size}</span>
          </p>
          <p>
            Color: <span className={classes.color}>{cartItem.color.name}</span>
          </p>
          <button onClick={removeFromCartHandler}>Remove</button>
        </div>
      </div>
      <div className={classes.price}>${cartItem.productId.price}</div>
      <div className={classes.quantity}>
        <button onClick={DecreaseFromCartHandler}>-</button>
        <div className={classes.count}>{cartItem.quantity}</div>
        <button onClick={addToCartHandler}>+</button>
      </div>
      <div className={classes.total}>
        ${cartItem.productId.price * cartItem.quantity}
      </div>
    </div>
  );
};

export default CartItem;
