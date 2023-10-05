import styles from "./youtube.module.css";

function Youtube() {
  return (
    <div className={styles.youtube_container}>
      <div className={styles.youtube_inner}>
        <h1>Here’s a Sneak Peek of Devfest Ado-EKiti 2022</h1>
        <iframe
          width="90%"
          height="80%"
          className={styles.youtube_iframe}
          src="https://www.youtube.com/embed/K6W9Usve6hI?si=IGCjC5_ZLdKU15k5&amp;controls=0"
          title="YouTube video player"
          frameBorder="10px"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Youtube;
