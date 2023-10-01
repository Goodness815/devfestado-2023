import Slider from "./slider";

export const Marquee = () => {
  return (
    <section
      style={{
        paddingBlock: "1rem",
        display: "flex",
        flexDirection: "column",
        marginBlockStart: "3rem",
      }}
    >
      <Slider rotate="-5deg" />
      <Slider rotate="15deg" />
    </section>
  );
};
