import styles from './speakers.module.css';
// import speaker from '../../../../assets/speakers/speaker-img.svg';
import { Ship } from './images/images';
import paperless from '../../../../assets/sponsor/paperless.png';
import propel from '../../../../assets/sponsor/propel.png';
import spurNation from '../../../../assets/sponsor/spur-nation.png';
import vastezer from '../../../../assets/sponsor/vastezer.png';
import brainBench from '../../../../assets/sponsor/brain-bench.png';
import stickerkeen from '../../../../assets/sponsor/stickerkeen.png';

// const allSpeakers = [
//   {
//     img: (
//       <img
//         src={speaker}
//         alt="js"
//         style={{
//           maxWidth: '100%',
//         }}
//       />
//     ),
//     name: 'First name & Last Name',
//     title: 'Title/Name of Company',
//     role: 'Speaker',
//   },
//   {
//     img: (
//       <img
//         src={speaker}
//         style={{
//           maxWidth: '100%',
//         }}
//       />
//     ),
//     name: 'First name & Last Name',
//     title: 'Title/Name of Company',
//     role: 'Speaker',
//   },
//   {
//     img: (
//       <img
//         src={speaker}
//         style={{
//           maxWidth: '100%',
//         }}
//       />
//     ),
//     name: 'First name & Last Name',
//     title: 'Title/Name of Company',
//     role: 'Speaker',
//   },
//   {
//     img: (
//       <img
//         src={speaker}
//         style={{
//           maxWidth: '100%',
//         }}
//       />
//     ),
//     name: 'First name & Last Name',
//     title: 'Title/Name of Company',
//     role: 'Speaker',
//   },
//   {
//     img: (
//       <img
//         src={speaker}
//         style={{
//           maxWidth: '100%',
//         }}
//       />
//     ),
//     name: 'First name & Last Name',
//     title: 'Title/Name of Company',
//     role: 'Speaker',
//   },
//   {
//     img: (
//       <img
//         src={speaker}
//         style={{
//           maxWidth: '100%',
//         }}
//       />
//     ),
//     name: 'First name & Last Name',
//     title: 'Title/Name of Company',
//     role: 'Speaker',
//   },
// ];

const logo = [paperless, propel, spurNation, vastezer, brainBench, stickerkeen];
function Speakers() {
  return (
    <>
      {/* <section className={styles.container}>
        <p className={styles.paragraph}>Meet Our Speakers</p>
        <div className={styles.flex_container}>
          {allSpeakers.map((item, idx) => (
            <div className={styles.speaker} key={idx}>
              <div>{item.img}</div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h3 className={styles.h3}>{item.name}</h3>
                <p className={styles.p}>{item.title}</p>
                <small className={styles.small}>{item.role}</small>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* sponsors */}
      <section className={styles.sponsor_container}>
        <h2 className={styles.sponsor_heading}>Sponsors & Partners</h2>
        <div className={styles.sponsor_div}>
          {logo.map((item, index) => (
            <div key={index} className={styles.img_container}>
              <img src={item} alt="sponsor" className={styles.sponsor_img} />
            </div>
          ))}
        </div>
        <Ship className={styles.ship} />
      </section>
    </>
  );
}

export default Speakers;
