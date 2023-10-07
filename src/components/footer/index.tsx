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
            <Link
              className={styles.footer_res_addition}
              target="__blank"
              to="https://gdg.community.dev/gdg-ado-ekiti"
            >
              <p>Join the community here</p>
            </Link>
          </div>
          <div
            className={`${styles.footer_inner_middle} ${styles.footer_res_removal}`}
          >
            <p>Saturday, 4th November, 2023</p>
            <p>Ado-Ekiti, Ekiti State, Nigeria</p>
            <p>For enquiry, sponsorship or partnership</p>
            <p>Contact : faith.oni@gdgadoekiti.dev</p>
          </div>
          <div className={styles.footer_inner_right}>
            <div
              className={`${styles.footer_inner_middle} ${styles.footer_res_addition}`}
            >
              <p>Saturday, 4th November, 2023</p>
              <p>Ado-Ekiti, Ekiti State, Nigeria</p>
              <p>For enquiry, sponsorship or partnership</p>
              <p>Contact : faith.oni@gdgadoekiti.dev</p>
            </div>
            <Link
              className={styles.footer_res_removal}
              target="__blank"
              to="https://gdg.community.dev/gdg-ado-ekiti"
            >
              <p>Join the community here</p>
            </Link>
            <span>Follow us today</span>
            <div className={styles.footer_inner_right_flex}>
              <Link target="__blank" to="https://twitter.com/gdgadoekiti">
                <TwitterIcon />
              </Link>
              <Link target="__blank" to="https://facebook.com/gdgadoekiti">
                <FacebookIcon />
              </Link>

              <Link
                target="__blank"
                to="https://www.linkedin.com/company/gdgadoekiti/"
              >
                <LinkednIcon />
              </Link>
              <Link target="__blank" to="https://instagram.com/gdgadoekiti_">
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
