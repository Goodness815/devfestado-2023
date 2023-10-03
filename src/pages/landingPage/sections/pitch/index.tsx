import styles from "./pitch.module.css";
import pitchImg from "../../../../assets/pitch/pitch-image.svg";

export const Pitch = () => {
  return (
    <section className={styles.container}>
      <p className={styles.pitch}>Pitch Your Idea @ Devfest Ado-Ekiti 2023</p>
      <div className={styles.content_div}>
        <img className='pitchImage' src={pitchImg} alt="img" />

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
          <button className={styles.button}>Click here to get started</button>
        </div>
      </div>
    </section>
  );
};

export default Pitch;
