class CountdownTimer {
    private targetDate: Date;
    private intervalId: number | undefined;
  
    constructor(targetDate: Date) {
      this.targetDate = targetDate;
      this.intervalId = undefined;
    }
  
    start() {
      if (this.intervalId === undefined) {
        this.intervalId = setInterval(() => {
          const currentDate = new Date();
          const timeRemaining = this.targetDate.getTime() - currentDate.getTime();
  
          if (timeRemaining <= 0) {
            this.stop();
            console.log("Countdown expired!");
          } else {
            const seconds = Math.floor((timeRemaining / 1000) % 60);
            const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
            const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  
            console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
          }
        }, 1000);
      } else {
        console.log("Countdown is already running.");
      }
    }
  
    stop() {
      if (this.intervalId !== undefined) {
        clearInterval(this.intervalId);
        this.intervalId = undefined;
      }
    }
  }
  
  // Calculate the target date 30 days from now
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 30); // Add 30 days to the current date
  const timer = new CountdownTimer(currentDate);
  timer.start();
  
      
      
    return ( 
      <div>  <h1>Countdown Clock</h1> 
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

        
    ) }

export default CountdownTimer