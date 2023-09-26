import styles from "./footer.module.css";
import logo from "../../assets/footer/footerLogo.png";
import { Link } from "react-router-dom";
import {
  FacebookIcon,
  InstagramIcon,
  LinkednIcon,
  TwitterIcon,
} from "./FooterIcons";

function Footer() {
  return (
    <>
      <div className={styles.footer_container}>
        <div className={styles.footer_inner}>
          <div className={styles.footer_inner_left}>
            <img src={logo} alt="devfestlogo23" />
            <p>Saturday, 4th November, 2023</p>
            <p>Ado-Ekiti, Ekiti State, Nigeria</p>
            <p>
              For enquiry, sponsorship or partnership, kindly contact:
              faith.oni@gdgadoekiti.dev
            </p>
          </div>
          <div className={styles.footer_inner_right}>
            <p>Join the community here</p>
            <span>Follow us today</span>
            <div className={styles.footer_inner_right_flex}>
              <Link to="#">
                <FacebookIcon />
              </Link>
              <Link to="#">
                <TwitterIcon />
              </Link>
              <Link to="#">
                <LinkednIcon />
              </Link>
              <Link to="#">
                <InstagramIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer_bottom}>
        All rights reserved. (c) GDG Ado-Ekiti 2023
      </div>
    </>
  );
}

export default Footer;
