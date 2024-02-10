import classes from "./MainHeader.module.css";

import { NavLink, ScrollRestoration } from "react-router-dom";
import { useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import ProfileIcon from "./ProfileIcon";
import SearchIcon from "../Shop/Search/SearchIcon";
import SearchModal from "../Shop/Search/SearchModal";

const MainHeader = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [toggleNav, setToggleNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavHandler = () => {
    setToggleNav((prev) => !prev);
  };

  const links = (
    <ul>
      <li>
        <NavLink
          to=""
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="shop"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink
          to="about"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="contact"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          Contact
        </NavLink>
      </li>
      <ScrollRestoration />
    </ul>
  );

  return (
    <header
      className={`${classes.header} ${
        scrollPosition > 15 ? classes["fix-header"] : ""
      }`}
    >
      <NavLink className={classes.logo} to="">
        Store
      </NavLink>
      <nav>{links}</nav>
      <div className={classes.icons}>
        <SearchIcon onClick={() => setShowSearch(prev => true)} />
        {showSearch && (
          <SearchModal onHideSearch={() => setShowSearch(prev => false)} />
        )}
        <CartIcon />
        <ProfileIcon />
        <div
          className={`${classes.mobileNav} ${toggleNav ? classes.active : ""}`}
          onClick={toggleNavHandler}
        >
          <span></span>
          <span></span>
          <span></span>
          <div className={classes.links}>{links}</div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
