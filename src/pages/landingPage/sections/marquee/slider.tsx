import styles from "./marquee.module.css";

function Slider({ rotate }: { rotate: "-5deg" | "15deg" }) {
  return (
    <div
      style={{ background: "#F9AB00", transform: `rotate(${rotate})` }}
      className={`${styles.marq1} ${styles.__ticker}`}
    >
      {Array.from({ length: 6 }, () => (
        <ul key={Math.random()} style={{ display: "flex", gap: "20px" }}>
          {Array(10)
            .fill(0)
            .map((_, idx) => (
              <li className={styles.marquee} key={idx}>
                <p style={{ whiteSpace: "nowrap" }}>DevFest Ado-Ekiti 2023</p>
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="14.2004"
                    cy="14.2004"
                    r="14"
                    transform="rotate(0.826171 14.2004 14.2004)"
                    fill="black"
                  />
                </svg>
              </li>
            ))}
        </ul>
      ))}
    </div>
  );
}

export default Slider;
