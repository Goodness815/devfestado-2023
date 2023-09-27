import { RegularButton } from "../../../../components/buttons";
import cupIcon from "../../../../assets/icons/cup.png";
import peopleIcon from "../../../../assets/icons/illustration2.png";
import arrowIcon from "../../../../assets/icons/redo.png";
import worldIcon from "../../../../assets/icons/world.png";
import nextIcon from "../../../../assets/icons/showarrow.png";
import styles from "./showcase.module.css";

function Showcase() {
  return (
    <div className={styles.showcase_container}>
      <img
        src={cupIcon}
        alt=""
        className={`${styles.showcase_icon} ${styles.cup_icon}`}
      />
      <img
        src={peopleIcon}
        alt=""
        className={`${styles.showcase_icon} ${styles.people_icon}`}
      />
      <img
        src={arrowIcon}
        alt=""
        className={`${styles.showcase_icon} ${styles.arrow_icon}`}
      />
      <img
        src={nextIcon}
        alt=""
        className={`${styles.showcase_icon} ${styles.next_icon}`}
      />
      <img
        src={worldIcon}
        alt=""
        className={`${styles.showcase_icon} ${styles.world_icon}`}
      />
      <div className={styles.showcase_inner}>
        <h1 data-aos="zoom-in" data-aos-delay="500">
          Are you READY...
        </h1>
        <p data-aos="fade-up" data-aos-duration="400">
          for the biggest tech event in Ekiti State, where developers are been
          celebrated and you have access to network with top-tech talents?
        </p>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
        >
          <RegularButton
            title="Register Here"
            className={styles.showcase_button}
          />
        </div>
      </div>
    </div>
  );
}

export default Showcase;
