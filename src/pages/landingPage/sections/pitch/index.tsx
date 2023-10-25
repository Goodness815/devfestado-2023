import styles from "./pitch.module.css";
import pitchImg from "../../../../assets/pitch/pitch-image.svg";
import { RegularButton } from "../../../../components/buttons";

export const Pitch = () => {
  return (
    <section id="pitch_container" className={styles.pitch_container}>
      <div className={styles.pitch_inner}>
        <h2 className={styles.pitch_header}>
          Pitch Your Idea @ <br /> DevFest Ado-Ekiti 2023
        </h2>
        <div className={styles.content_div}>
          <div className={styles.img_div}>
            <img className={styles.pitchImage} src={pitchImg} alt="img" />
          </div>

          <div className={styles.text_div}>
            <p className={styles.paragraph}>
              Do you have a groundbreaking startup idea that you believe can
              transform Ekiti State? DevFest Ado-Ekiti 2023 is here to support
              you! We're thrilled to announce our startup pitch session, where
              you have the opportunity to present your innovative ideas and
              potentially receive valuable support.
            </p>
            <p className={styles.paragraph}>
              We encourage you to provide a clear and compelling overview of
              your idea, its impact, and how you plan to execute it. Selected
              startups will be invited to pitch live at DevFest Ado-Ekiti 2023.
              Let's work together to bring your startup dreams to life! DevFest
              Ado-Ekiti 2023 is not just an event; it's a platform where
              innovations take flight.We look forward to hearing about your
              exciting ideas!
            </p>

            <div className={styles.btn_container}>
              <RegularButton
                title="Click here to get started"
                className={styles.regularButton}
                url="https://bit.ly/devfestado23ideapitch"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pitch;
