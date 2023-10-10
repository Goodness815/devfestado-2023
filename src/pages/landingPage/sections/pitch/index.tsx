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
          Do you have a groundbreaking startup idea that you believe can transform  Ekiti State?

          <br/>DevFest Ado-Ekiti 2023 is here to support you! 
          We're thrilled to  announce our startup <br/>pitch session, 
          where you have the opportunity to present your innovative ideas and <br/>potentially receive valuable support.
          </p>
          <p className={styles.paragraph}>
          We encourage you to provide a clear and compelling overview of your idea, its impact,<br/> and how you plan to execute it. Selected startups will be invited to  pitch live at DevFest <br/>Ado-Ekiti 2023. Let's work together to bring your startup  dreams to life!
          DevFest <br/>Ado-Ekiti 2023 is not just an event; it's a platform where  innovations take flight.We look <br/>forward to hearing about your exciting ideas! 

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
