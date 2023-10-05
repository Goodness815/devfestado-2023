import React, { useState, useEffect } from "react";
import styles from "./countdown.module.css";

function CountdownTimer() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: '0',
    minutes: '0',
    seconds: '0',
  });

  useEffect(() => {
    const targetDate: any = new Date(
      `${new Date().getFullYear()}-11-04T00:00:00`
    );
    const interval = setInterval(() => {
      const now: any = new Date();
      const timeDifference = targetDate - now;

      if (timeDifference <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = String(
        Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).padStart(2, "0");
      const minutes = String(
        Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, "0");
      const seconds = String(
        Math.floor((timeDifference % (1000 * 60)) / 1000)
      ).padStart(2, "0");

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
            <span className={styles.countdown_yellow}>{countdown.days}</span>
            <p className={styles.countdown_yellow}>Days</p>
          </div>
          <div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
