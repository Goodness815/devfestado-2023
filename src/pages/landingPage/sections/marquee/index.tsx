import Ticker from "react-ticker";
import styles from "./marquee.module.css";

export const Marquee = () => {
  return (
    <section
      style={{
        paddingBlock: "1rem",
        display: "flex",
        flexDirection: "column",
        height: "520px",
      }}
    >
      <div style={{ background: "#F9AB00" }} className={styles.marq1}>
        <Ticker>
          {({ index }) => (
            <div className={styles.marquee}>
              <p>DevFest Ado-Ekiti 2023</p>
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
            </div>
          )}
        </Ticker>
      </div>
      <div className={styles.marq2}>
        <Ticker>
          {({ index }) => (
            <div className={styles.marquee}>
              <p>DevFest Ado-Ekiti 2023</p>
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
            </div>
          )}
        </Ticker>
      </div>
    </section>
  );
};
