import classes from "./CartContainer.module.css";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../UI/Button";
import { useState } from "react";
import Checkout from "../Shop/Checkout";

const CartContainer = () => {
  const cart = useSelector((state) => state.cart);
  let cartItems = [];

  if (cart.cartItems.length > 0) {
    cartItems = cart.cartItems.map((cartItem) => {
      return <CartItem cartItem={cartItem} key={cartItem._id} />;
    });
  }

  const [showCheckout, setShowCheckOut] = useState(false);

  const showCheckoutHandler = () => {
    setShowCheckOut(true);
  };

  const hideCheckoutHandler = () => {
    setShowCheckOut(false);
  };

  return (
    <div className={classes["cart-container"]}>
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className={classes["cart-empty"]}>
          <p>Your cart is currently empty</p>
          <div className={classes["start-shopping"]}>
            <Link to="/shop">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className={classes.titles}>
            <h3 className={classes["product-title"]}>Product</h3>
            <h3 className={classes.price}>Price</h3>
            <h3 className={classes.quantity}>Quantity</h3>
            <h3 className={classes.total}>Total</h3>
          </div>
          <div className={classes["cart-items"]}> {cartItems} </div>
          <div className={classes["cart-summary"]}>
            <Button
              className={classes["clear-btn"]}
              onClick={() => handleClearCart()}
              title="Clear Cart"
            />
            <div className={classes["cart-checkout"]}>
              <div className={classes.subtotal}>
                <span>Subtotal</span>
                <span className={classes.amount}>${cart.subTotal}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button onClick={showCheckoutHandler}>Check out</button>
              {showCheckout && (
                <Checkout onHideCheckout={hideCheckoutHandler} />
              )}
              <div className={classes["continue-shopping"]}>
                <Link to="/shop">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
