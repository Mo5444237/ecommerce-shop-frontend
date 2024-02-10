import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./user-slice";
import cartSlice from "./cart-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
    ui: uiSlice
  },
});

export default store;
