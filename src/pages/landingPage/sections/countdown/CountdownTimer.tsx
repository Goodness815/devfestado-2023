
import styles from "./countdown.module.css";

function CountdownTimer() {




  return (
    <div className={styles.countdown_container}>
      <div className={styles.countdown_inner}>
        <div className={styles.countdown_left}>
          <p>
            How many <br /> days away ?
          </p>
        </div>
        <div className={styles.countdown_right}>
          <div className={styles.countdown_item}>
            <span className={styles.countdown_yellow}>We are live!</span>
            {/* <p className={styles.countdown_yellow}>We are live!</p> */}
          </div>
          {/* <div>
            <span>:</span>
            <br />
            <br />
          </div>
          <div className={styles.countdown_item}>
            <span>{countdown.hours}</span>
            <p>Hours</p>
          </div>
          <div>
            <span>:</span>
            <br />
            <br />
          </div>
          <div className={styles.countdown_item}>
            <span>{countdown.minutes}</span>
            <p>Minutes</p>
          </div>
          <div>
            <span>:</span>
            <br />
            <br />
          </div>
          <div className={styles.countdown_item}>
            <span>{countdown.seconds}</span>
            <p>Seconds</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
