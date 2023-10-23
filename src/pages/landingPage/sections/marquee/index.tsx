import Slider from "./slider";
import styles from "./marquee.module.css";
export const Marquee = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        marginBlock: "2rem",
      }}
    >
      <Slider rotate={styles.right} />
      <Slider rotate={styles.left} />
    </section>
  );
};
