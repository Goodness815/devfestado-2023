import styles from "./pitch.module.css";
import pitchImg from "../../../../assets/pitch/pitch-image.svg";

export const Pitch = () => {
  return (
    <section className={styles.container}>
      <p className={styles.pitch}>Pitch Your Idea @ <br/> Devfest Ado-Ekiti 2023</p>
      <div className={styles.content_div}>
        <img className={styles.pitchImage} src={pitchImg} alt="img" />

        <div className={styles.text_div}>
          <p className={styles.paragraph}>

          Do you have a groundbreaking startup idea that you believe can transform Ekiti State?
          </p>
          <p className={styles.paragraph}>

          DevFest Ado-Ekiti 2023 is here to support you! <br/>
          We're thrilled to announce our startup pitch session, 
          where you have the opportunity to present your innovative ideas and potentially 
          receive valuable support for your venture.
          </p>
          <h3 className={styles.heading3}>How to Apply:</h3>
          <p className={styles.paragraph}>

          We encourage you to provide a clear and compelling overview of your idea,its impact, and how you plan to execute it. Selected startups will be invited to pitch live at DevFest Ado-Ekiti 2023.
          <br/>
          Let's work together to bring your startup dreams to life! <br/>DevFest Ado-Ekiti 2023 is not just an event; it's a platform where innovations take flight. 
          <br/>We look forward to hearing about your exciting ideas!

          </p>

          <a href="https://bit.ly/devfestado23ideapitch" target="__blank">
            <button className={styles.regularButton}>
              Click here to get started
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pitch;
