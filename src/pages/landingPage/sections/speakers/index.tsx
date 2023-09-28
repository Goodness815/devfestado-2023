import styles from "./speakers.module.css";
import speaker from "../../../../assets/speakers/speaker-img.svg";
import { Fedex, Flutter, Google, Mtn, Sc, Cowrywise } from "./images/images";

const allSpeakers = [
  {
    img: <img src={speaker} alt="js" />,
    name: "First name & Last Name",
    title: "Title/Name of Company",
    role: "Speaker",
  },
  {
    img: <img src={speaker} />,
    name: "First name & Last Name",
    title: "Title/Name of Company",
    role: "Speaker",
  },
  {
    img: <img src={speaker} />,
    name: "First name & Last Name",
    title: "Title/Name of Company",
    role: "Speaker",
  },
  {
    img: <img src={speaker} />,
    name: "First name & Last Name",
    title: "Title/Name of Company",
    role: "Speaker",
  },
  {
    img: <img src={speaker} />,
    name: "First name & Last Name",
    title: "Title/Name of Company",
    role: "Speaker",
  },
  {
    img: <img src={speaker} />,
    name: "First name & Last Name",
    title: "Title/Name of Company",
    role: "Speaker",
  },
];

const logo = [
  <Google />,
  <Sc />,
  <Flutter />,
  <Mtn />,
  <Cowrywise />,
  <Fedex />,
];
function Speakers() {
  return (
    <>
      <section className={styles.container}>
        <p className={styles.paragraph}>Meet Our Speakers</p>
        <div className={styles.flex_container}>
          {allSpeakers.map((item, idx) => (
            <div className={styles.speaker} key={idx}>
              <div>{item.img}</div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <h3 className={styles.h3}>{item.name}</h3>
                <p className={styles.p}>{item.title}</p>
                <small className={styles.small}>{item.role}</small>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* sponsors */}
      <section className={styles.sponsor_container}>
        <h2>Sponsors & Partners</h2>
        <div className={styles.sponsor_div}>
          {logo.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Speakers;
