import styles from "./marquee.module.css";
import Slider from "./slider";

export const Marquee = () => {
  return (
    <section
      style={{
        paddingBlock: "1rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Slider rotate="-5deg" />
      <Slider rotate="10deg" />
    </section>
  );
};
