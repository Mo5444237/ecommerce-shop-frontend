import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import AuthenticationPage from "./pages/Authentication";
import { action as logoutAction } from "./pages/Logout";
import ErrorPage from "./pages/Error";
import ShopPage from "./pages/Shop";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";
import CartPage from "./pages/Cart";
import ProductDetailsPage from "./pages/ProductDetails";
import OrdersPage from "./pages/Orders";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "products/:productId",
        element: <ProductDetailsPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "orders",
        children: [
          {
            index: true,
            element: <OrdersPage />,
          },
        ]
      },
      {
        path: "auth",
        element: <AuthenticationPage />,
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);

export default router;
