import { cartActions } from "./cart-slice";
import { userActions } from "./user-slice";
import { getToken } from "../utils/auth";
import { getProfile, getRefreshToken, logout } from "../services/auth";

// Handle logout
export const logoutUser = () => {
  return async (dispatch) => {
    try {
      await logout();
      localStorage.removeItem("token");
      dispatch(userActions.clearUser());
      dispatch(cartActions.clearCart());
    } catch (error) {
      localStorage.removeItem("token");
      dispatch(userActions.clearUser());
      dispatch(cartActions.clearCart());
    }
  };
};

// handle refesh token request (Set new acces token when current expires)
export const refreshTokenHandler = (reExecuteFunction) => {
  return async (dispatch) => {
    try {
      await getRefreshToken();

      // re-execute a function again after setting the new token
      await reExecuteFunction();
    } catch (error) {
      dispatch(logoutUser());
    }
  };
};

// Provide persistence for user Data when refreshing the app
export const fetchUserData = () => {
  return async (dispatch) => {
    try {
      const user = await getProfile();
      dispatch(userActions.setUser({ user: user }));
    } catch (error) {
      if(error.info.message === 'jwt expired' && getToken())
        dispatch(refreshTokenHandler(getProfile));
    }
  };
};
