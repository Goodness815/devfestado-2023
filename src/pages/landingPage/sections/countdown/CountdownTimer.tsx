import styles from "./countdown.module.css";
function CountdownTimer() {
  return (
    <div>
      {" "}
      <h1>Countdown Clock</h1>
      <div id="clockdiv">
        <div>
          <span className="days"></span>
          <div className="smalltext">Days</div>
        </div>
        <div>
          <span className="hours"></span>
          <div className="smalltext">Hours</div>
        </div>
        <div>
          <span className="minutes"></span>
          <div className="smalltext">Minutes</div>
        </div>
        <div>
          <span className="seconds"></span>
          <div className="smalltext">Seconds</div>
        </div>
      </div>
      <p className={styles.paragraph}>How many days away?</p>
    </div>
  );
}

export default CountdownTimer;
