import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/products";

import router from "./BrowserRouter";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCartData } from "./store/cart-actions";
import { fetchUserData } from "./store/user-actions";

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      return;
    }
    dispatch(fetchCartData());
  }, [dispatch, cart.changed]);
  
  useEffect(() => {
    if (!token) {
      return;
    }
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
