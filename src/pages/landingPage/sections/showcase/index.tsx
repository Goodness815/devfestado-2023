import { RegularButton } from "../../../../components/buttons";
import styles from "./showcase.module.css";

function Showcase() {
  return (
    <div className={styles.showcase_container}>
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
