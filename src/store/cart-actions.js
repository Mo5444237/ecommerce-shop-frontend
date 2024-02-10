import { cartActions } from "./cart-slice";

import { refreshTokenHandler } from "./user-actions";
import {
  addToCart,
  getCart,
  decreaseFromCart as decreaseItem,
  removeFromCart as removeItem,
} from "../services/cart";
import { uiActions } from "./ui-slice";
import { getToken } from "../utils/auth";
// Thunk function

export const fetchCartData = () => {
  return async (dispatch) => {
    try {
      const { items, totalQuantity, subTotal } = await getCart();
      dispatch(
        cartActions.replaceCart({
          cartItems: items || [],
          totalQuantity: totalQuantity,
          subTotal,
        })
      );
    } catch (error) {
      // get a new refresh token and re-execute
      if (error.info.message === 'jwt expired' && getToken()) {
        dispatch(refreshTokenHandler(getCart));
      } else {
        dispatch(uiActions.setUiChanged(true));
        dispatch(
          uiActions.addNotification({
            status: "error",
            title: "Error",
            message: error.info.message,
          })
        );

      }
    }
  };
};

export const AddToCart = (product) => {
  return async (dispatch) => {
    try {
      dispatch(cartActions.setCartChanged(true));
      await addToCart(product);
      dispatch(uiActions.setUiChanged(true));
      dispatch(
        uiActions.addNotification({
          status: "success",
          title: "Success",
          message: "Item added successfully.",
        })
      );
      dispatch(cartActions.setCartChanged(false));
    } catch (error) {
      // get a new refresh token and re-execute
      if (error.info.message === 'jwt expired' && getToken()) {
        dispatch(refreshTokenHandler(addToCart(product)));
      } else {
        dispatch(uiActions.setUiChanged(true));
        dispatch(
          uiActions.addNotification({
            status: "error",
            title: "Error",
            message: error.info.message,
          })
        );
      }
    }
  };
};

export const decreaseFromCart = (productId) => {
  return async (dispatch) => {
    try {
      dispatch(cartActions.setCartChanged(true));
      await decreaseItem(productId);
      dispatch(uiActions.setUiChanged(true));
      dispatch(
        uiActions.addNotification({
          status: "success",
          title: "Success",
          message: "Item Decreased successfully.",
        })
      );
      dispatch(cartActions.setCartChanged(false));
    } catch (error) {
      // get a new refresh token and re-execute
      if (error.info.message === 'jwt expired' && getToken())
        dispatch(refreshTokenHandler(sendData));
    }
  };
};

export const RemoveFromCart = (productId) => {
  return async (dispatch) => {
    try {
      dispatch(cartActions.setCartChanged(true));
      await removeItem(productId);
      dispatch(uiActions.setUiChanged(true));
      dispatch(
        uiActions.addNotification({
          status: "success",
          title: "Success",
          message: "Item removed successfully.",
        })
      );
      dispatch(cartActions.setCartChanged(false));
    } catch (error) {
      // get a new refresh token and re-execute
      if (error.info.message === 'jwt expired' && getToken())
        dispatch(refreshTokenHandler(sendData));
    }
  };
};
