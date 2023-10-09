import Slider from "./slider";

export const Marquee = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        marginBlock: "7rem",
      }}
    >
      <Slider rotate="-16deg" />
      <Slider rotate="7deg" />

    </section>
  );
};
