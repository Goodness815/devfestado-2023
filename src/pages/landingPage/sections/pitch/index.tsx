import styles from "./pitch.module.css";
import pitchImg from "../../../../assets/pitch/pitch-image.svg";

export const Pitch = () => {
  return (
    <section className={styles.container}>
      <p className={styles.pitch}>Pitch Your Idea @ <br/> DevFest Ado-Ekiti 2023</p>
      <div className={styles.content_div}>
        <img className={styles.pitchImage} src={pitchImg} alt="img" />

        <div className={styles.text_div}>
        
        
          <p className={styles.paragraph}>
          Do you have a groundbreaking startup idea that you believe can transform <br/> Ekiti State?

          DevFest Ado-Ekiti 2023 is here to support you! 
          We're thrilled to <br/> announce our startup pitch session, 
          where you have the opportunity to <br/>present your innovative ideas and potentially 
          receive valuable support.
          </p>
          <p className={styles.paragraph}>
          We encourage you to provide a clear and compelling overview of your idea,<br/> its impact, and how you plan to execute it. Selected startups will be invited to <br/> pitch live at DevFest Ado-Ekiti 2023. Let's work together to bring your startup <br/> dreams to life! 

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
