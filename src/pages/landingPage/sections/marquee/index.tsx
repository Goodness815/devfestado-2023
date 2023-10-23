import Slider from "./slider";

export const Marquee = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        marginBlock: "2rem",
        position: "relative"
      }}
    >
      <Slider rotate="-16deg" />
      <Slider rotate="7deg" />

    </section>
  );
};
