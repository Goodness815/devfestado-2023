import styles from "./pitch.module.css";
import pitchImg from "../../../../assets/pitch/pitch-image.svg";

export const Pitch = () => {
  return (
    <section className={styles.container}>
      <p className={styles.pitch}>Pitch Your Idea @ Devfest Ado-Ekiti 2023</p>
      <div className={styles.content_div}>
        <img className={styles.pitchImage} src={pitchImg} alt="img" />

        <div className={styles.text_div}>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur. Lectus at massa cursus nisi
            dictum proin aliquet tellus pulvinar. Viverra et elementum et porta
            aenean ac in quis fusce. Etiam lorem elementum hendrerit aliquam.
            Enim at sed in.Lorem ipsum dolor sit amet consectetur. Lectus at
            massa cursus nisi dictum proin aliquet tellus pulvinar. Viverra et
            elementum et porta aenean ac in quis fusce. Etiam lorem elementum
            hendrerit aliquam. Enim at sed in.Lorem ipsum dolor sit
          </p>
          <a href="https://bit.ly/devfestado23ideapitch" target="__blank">
          <button className={styles.button}>Click here to get started</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pitch;
