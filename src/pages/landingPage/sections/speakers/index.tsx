import styles from "./speakers.module.css";
import { Ship } from "./images/images";
import paperless from "../../../../assets/sponsor/paperless.png";
import propel from "../../../../assets/sponsor/propel.png";
import spurNation from "../../../../assets/sponsor/spur-nation.png";
import vastezer from "../../../../assets/sponsor/vastezer.png";
import brainBench from "../../../../assets/sponsor/brain-bench.png";
import stickerkeen from "../../../../assets/sponsor/stickerkeen.png";
//  Speaker Images

import speaker1 from "../../../../assets/speakers/speaker3.jpg";

const allSpeakers = [
  {
    img: "https://lh3.googleusercontent.com/pw/ADCreHdgEdQPbVuGSy9q0-_x16g4gtovpkYVfoX8PJK0T9P923sXwkX532IezIfmfIQVaRXWqxPDgF0Xfcw3om-QFv5HNSVLOegtYZ64KiKTVu5AHRYCjGSIXSoGTgjInEnBeLaeNimzFUfpLQXv9eHKxWE_DQ=w724-h724-s-no-gm?authuser=0",
    name: "Chander Dhall",
    title: "GDE/Google",
    role: "Speaker",
  },
  {
    img: "https://lh3.googleusercontent.com/pw/ADCreHec7wvMwuyltOnUg-KvIA2S73ipy3ghH2pJqROIVjpbVnI7H32FPZx2Lu75GFZKHuPCGWrU0mGBMBUMzsdnoz5jFpf77PWgosZwehok1GH_kopCYpDxNXwI2q6yS2DUi_bti5DYt_ZWccFxMBSSM6iJLA=w627-h836-s-no-gm?authuser=0",
    name: "Ayobami Olawale",
    title: "CFO/DeliveryNow",
    role: "Speaker",
    imgPosition: "top",
  },
  {
    img: speaker1,
    name: "David Oluwabusayo",
    title: "CTO/Paperless",
    role: "Speaker",
    imgPosition: "top",
  },
  {
    img: "https://lh3.googleusercontent.com/pw/ADCreHc4xzV1FqPMB2jQZwOCCt1Kamq_h5EtU343vKYVrLOD0gXCEMcW4Mxqgd96Zn_6XAI0fZCbe-nHi6cW_uE2IN2j037QfpgeXJWdCGYxk-8rPYmvQrJXhuqnoAuFxb8DSlzrRqxdCZUsAPhaCBUnpndy6g=w695-h753-s-no-gm?authuser=0",
    name: "Oyinkansola Awosan",
    title: "Technical Writer/Deposits",
    role: "Speaker",
    imgPosition: "top",
  },
  {
    img: "https://lh3.googleusercontent.com/pw/ADCreHcVyM3kHrs_u8XTTzB1-I_oLcWP2l9nz5VDtDOggOHsrRywxaWbyt_2Ni9Y59MJeRV7fV6S0ja_jctFVtf61LK5KSDYt7ROT-xEGeueJLWyxa0-Vi2jTP5airr53nbfrn9JlxvA2RNQmQeR_OJoubCTfg=w596-h878-s-no-gm?authuser=0",
    name: "Stephen Afolayan",
    title: "Community Organizer/Binapti",
    role: "Speaker",
    imgPosition: "top",
  },
  {
    img: "https://lh3.googleusercontent.com/pw/ADCreHfkufRBCf64-5kG6QQGGxwlvFlRciZotwtzzMHa6fjbHVVmxgd_YfAio-rkjFmTLxgrRiPwLt_x2gffE8FG65VletMPVt2WfjhzpL3afXJXIjuD33fghkCBsQ8KaCkDOAFaxI_VP0Okfe_7VA-Np2INHw=w636-h823-s-no-gm?authuser=0",
    name: "Thabita Ita",
    title: "Ex GDSC Lead",
    role: "Speaker",
    imgPosition: "top",
  },
  {
    img: "https://lh3.googleusercontent.com/pw/ADCreHeLDBibh4mzWapiU1fKB4oStJjxgJ5GW3Qwi0cYnplt4m8FS8eYLfLhbfg5cBBcjMu8k1nnlKKqd7JiiVUvMZCbU7FRb1QaFaKCBc8I0QvCKXB8Xey-zm6HAufhCrJRipdVaAPYy7UQ7brIVsJ4bOw2IQ=w627-h836-s-no-gm?authuser=0",
    name: "Praise Olawoore",
    title: "Machine Learning Engineer",
    role: "Speaker",
    imgPosition: "center",
  },
  {
    img: "https://lh3.googleusercontent.com/pw/ADCreHcEE-cWgLExm-lQecvGhXS9pw4MRdntxqsSypicZ52YkpJVq4enGrX5Y72EJ2AE2K2JHnnNRQmg4lZ8jq8fgbr9uYSxpd0xg9_P_wKVoS9zf1F2q81DAIfaf74pIAeBVKkFSH5uifJsrkb66w5FVVXLuw=w627-h836-s-no-gm?authuser=0",
    name: "Aanuoluwa Dunsin",
    title: "Front End Developer",
    role: "Speaker",
    imgPosition: "top",
  },
  {
    img: "https://lh3.googleusercontent.com/pw/ADCreHdDcdOWnW_ZZruTTNBm47Djw3lc_MojKjrt_bVy53kHPXPOGEEMXCNm8ZoQ3HsfrjDE12pe3d7uIa3nMDT97WBQ_3LC2yvcZIE8thhzd0ERxPjVE3Vbcp58dOBz2Q7a0NIlN-IrzqSk6IBzEsYaHcWUnw=w647-h809-s-no-gm?authuser=0",
    name: "Tobi Ogunkoya",
    title: "Co-Founder/VastEZER",
    role: "Speaker",
    imgPosition: "top",
  },
  {
    img: "https://lh3.googleusercontent.com/pw/ADCreHfWkBDhMxT4YJUT7xCw3d9ONz1hnUtcxL-7SBDOyne5-a_6k3_i2Afuic2DQKae6UeakKuCoN_VgreYkn6pQVJXgMScbv2QIi5hyEd1L7nV7M8TvH2q804sxA3h6AM_nYLMk42JJfsovBdSOcltAFTy1g=w724-h724-s-no-gm?authuser=0",
    name: "Mobolaji Tenibiaje",
    title: "Lecturer",
    role: "Panelist",
    imgPosition: "top",
  },
  {
    img: "https://lh3.googleusercontent.com/pw/ADCreHfxUgjiiLRQRqeCxY1f_ootgO8gXApj0JO14r5BiUXfBtH2vdakxgfclsVE5iTtGujj_pf6DUySjdZZ8eJd092gGUkDXjxLuo-zkEnxkrLgRo2R8DhMcv-RsXv60n5JhRtUqi7J7qQUs69f0PiZrrGjYw=w512-h683-s-no-gm?authuser=0",
    name: "Olorunfemi Davis",
    title: "Co-Organizer/Isec",
    role: "Panelist",
    imgPosition: "center",
  },
  {
    img: "https://lh3.googleusercontent.com/pw/ADCreHe6GIVx6oFQMI07ve3uIaGXZE8pVmKKAAeK0Sbaaxs44toL6frZ06qrDIZrNwdJ4zVfF17iZnBuAdhnQICeQSC75UicJRcwQtW-vFFZTYTG0sywMUI4yYEQ1_CPU93c_cvd451-jbd3V45cG8D1gqrIjg=w647-h809-s-no-gm?authuser=0",
    name: "Temidayo Olalekan",
    title: "Head of Community/FullGap",
    role: "Panelist",
    imgPosition: "top",
  },
  {
    img: "https://lh3.googleusercontent.com/pw/ADCreHfrFYaiDkuBLh-vIthJoVXlerj6ihmGSCY286ePy9EB1Lv5mi9MsxFGj6LGevTmrHW20sK3Z38-FeB2ayHoix3FW1DDHH14c3-Y3iZjCtDr7xWJOEJlF1OA9GV1lQYn6gYzqYnPAZtet8r5nq7O2fSNVg=w627-h836-s-no-gm?authuser=0",
    name: "Solaru Olusegun",
    title: "Head of Community/FullGap",
    role: "Panelist",
    imgPosition: "center",
  },
  {
    img: "https://lh3.googleusercontent.com/pw/ADCreHdGMxpI0B_n0SOH-fSKXJs5WRilI1so6Nx-hA-h14CdelNM7m_eZvv8z1vsaa8HS0UqF2rdsMSxbQlSjMfCRyqaZ7swR-eihbVAHLKPrFOHT1bMZHuzpI21YZnQ0qNDh7e8LQLPMakU7MnlS_tggH8XuQ=w681-h769-s-no-gm?authuser=0",
    name: "Chizurum Egwunwankwo",
    title: "Ecosystem & Partnerships",
    role: "Panelist",
    imgPosition: "top",
  },
  {
    img: "https://lh3.googleusercontent.com/pw/ADCreHc_kO_A4lHX5-BPiwCgRqRRSKcpbKwzAG4Pnjx3lOaozFTBSKIK4qT7b_uEJVMB-yjM7lezKf4QA9bL0CmoI-gDcBssPaPqHBJSjGFk3sQDMxm3KxB5EjCdUWdklQhn7OPwjPZQF6FEebm37tVsWWNrRQ=w647-h809-s-no-gm?authuser=0",
    name: "Abdulmalik Salawu",
    title: "Founder/Stickerkeen",
    role: "Panelist",
    imgPosition: "top",
  },
];

const logo = [paperless, propel, spurNation, vastezer, brainBench, stickerkeen];

console.log(logo);

function Speakers() {
  return (
    <>
      <section className={styles.container}>
        <p className={styles.paragraph}>Meet Our Speakers and Panelists</p>
        <div className={styles.flex_container}>
          {allSpeakers.map((item, idx) => (
            <div className={styles.speaker} key={idx}>
          
                <img
                  src={item.img}
                  style={{
                    objectPosition: item.imgPosition ? item.imgPosition : "",
                  }}
                  className={styles.speaker_img}
                />
            

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
        <h2 className={styles.sponsor_heading}>Sponsors & Partners</h2>
        <div className={styles.sponsor_div}>
          {logo.map((item, index) => (
            <div key={index} className={styles.img_container}>
              <img
                src={item}
                alt="sponsor"
                className={styles.sponsor_img}
                style={{
                  filter:
                    item === "/src/assets/sponsor/stickerkeen.png"
                      ? "invert(1)"
                      : "",
                }}
              />
            </div>
          ))}
        </div>
        <Ship className={styles.ship} />
      </section>
    </>
  );
}

export default Speakers;
