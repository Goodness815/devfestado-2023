import styles from "./twitter.module.css";
import { SliderContent } from "./slider-content";

const Twitter = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "64px",
        paddingBlock: "130px",
      }}
    >
      <h3
        style={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: "clamp(21.33px, 3.125vw, 50.52px)",
        }}
      >
        The Feedbacks says it all...
      </h3>
      <div
        style={{
          background: "#4285F4",
          paddingBlock: "40px",
          display: "flex",
          gap: "20px",
          justifyContent: "center",
        }}
        className={styles.__ticker}
      >
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
        <SliderContent />
      </div>
    </section>
  );
};

export default Twitter;
