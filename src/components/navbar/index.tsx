import { Link } from "react-router-dom";
import logo from "../../assets/header/logo.png";
import styles from "./navbar.module.css";
import { RegularButton } from "../buttons";
import hamburger from "../../assets/header/hamburger.svg";
import { useState } from "react";
function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <div className={styles.navbar_container}>
        <div className={styles.navbar_inner}>
          <img src={logo} alt="devfest23" />
          <div className={styles.navbar_ul}>
            <Link to="/">Schedule</Link>
            <Link to="/">Become a Sponsor</Link>
            <Link to="/">Partner with us</Link>
            <Link to="/">Become a Speaker</Link>
            <RegularButton
              title="Register Here"
              className={styles.navbar_button}
            />
            <img
              src={hamburger}
              className={styles.navbar_hamburger}
              onClick={openNav}
              alt="menu"
            />
          </div>
        </div>
      </div>

      <div
        className={`${styles.sidenav} ${
          isNavOpen ? `${styles.sidenav_show}` : ""
        }`}
      >
        <div className={styles.sidenav_inner}>
          <a
            href="javascript:void(0)"
            className={styles.closebtn}
            onClick={closeNav}
          >
            &times;
          </a>
          <Link to="/">Schedule</Link>
          <Link to="/">Become a Sponsor</Link>
          <Link to="/">Partner with us</Link>
          <Link to="/">Become a Speaker</Link>
          <RegularButton
            title="Register Here"
            className={styles.sidebar_button}
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
