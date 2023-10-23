import { RegularButton } from "../../../../components/buttons";
import cupIcon from "../../../../assets/icons/cup.png";
import peopleIcon from "../../../../assets/icons/illustration2.png";
import arrowIcon from "../../../../assets/icons/redo.png";
import worldIcon from "../../../../assets/icons/world.png";
import kiteIcon from "../../../../assets/icons/kite.png";
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
      <img
        src={kiteIcon}
        alt=""
        className={`${styles.showcase_icon} ${styles.kite_icon}`}
      />
      <div className={styles.showcase_inner}>
        <h1 data-aos="zoom-in" data-aos-delay="500">
          Are you READY for the...
        </h1>
        <p data-aos="fade-up" data-aos-duration="400">
          most anticipated tech event in Ekiti State, where tech enthusiasts
          from all backgrounds are celebrated and you have the chance to connect
          with top tech talents?
          <br />
          DevFest Ado-Ekiti 2023 will be an unforgettable experience!
        </p>

        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
        >
          <RegularButton
            title="Register Here"
            className={styles.showcase_button}
            url="https://bit.ly/devfestado23"
          />
        </div>
      </div>
    </div>
  );
}

export default Showcase;
