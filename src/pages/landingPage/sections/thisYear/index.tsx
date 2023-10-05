import Image from "../../../../components/images";
import styles from "./thisyear.module.css";
import { LeftSwirlArrow, RightSwirlArrow } from "./icons";
import thisyear1 from "../../../../assets/pictures/thisyear1.webp";
import thisyear2 from "../../../../assets/pictures/thisyear2.webp";
import { Link } from "react-router-dom";

function ThisYear() {
  return (
    <div className={styles.thisyear_container}>
      <div className={styles.thisyear_inner}>
        <h1 data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          What we are doing this year...
        </h1>
        <div className={styles.thisyear_flex}>
          <div className={styles.thisyear_flex_left}>
            <Image src={thisyear1} color="red" />
            <p data-aos="fade-right" data-aos-duration="3000">
              It's another time of the year, when we gather together for Devfest
              in Ado-Ekiti... <br />{" "}
              <Link to="" style={{ color: "black", textDecoration: "none" }}>
                <b>Read More</b>
              </Link>
            </p>
            <RightSwirlArrow className={styles.thisyear_flex_left_icon} />
          </div>
          <div className={styles.thisyear_flex_right}>
            <p data-aos="fade-left" data-aos-duration="2000">
              We are super excited that our amazing community, GDG Ado-Ekiti is
              10 years old... <br />{" "}
              <Link to="" style={{ color: "black", textDecoration: "none" }}>
                <b>Read More</b>
              </Link>
            </p>
            <Image src={thisyear2} color="#34A853" />
            <LeftSwirlArrow className={styles.thisyear_flex_right_icon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThisYear;
