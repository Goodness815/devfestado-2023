import { Link } from "react-router-dom";
import logo from "../../assets/header/logo.png";
import styles from "./navbar.module.css";
import { RegularButton } from "../buttons";
function Navbar() {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_inner}>
        <img src={logo} alt="devfest23" />
        <div className={styles.navbar_ul}>
          <Link to="/">Schedule</Link>
          <Link to="/">Become a Sponsor</Link>
          <Link to="/">Partner with us</Link>
          <Link to="/">Become a Speaker</Link>
          <RegularButton title="Register Here" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
