import { Outlet } from "react-router-dom";
import MainHeader from "../components/Layout/MainHeader";
import Footer from "../components/Layout/Footer";
import NotificationsList from "../components/UI/NotificationsList";

const RootLayout = () => {

  return (
    <>
      <MainHeader />
      <main>
        <Outlet />
        <NotificationsList />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
