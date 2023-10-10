import styles from "./imagegallery.module.css";
import storyImg from "../../../../assets/pictures/Slice 1.png";

function ImageGallery() {

    return (
      <>
        <div id="imagegallery" className={styles.image_gallery}>
        <img
                src={storyImg}
                className={`${styles.image_gall1} ${styles.image_gall2}`}
                alt="arrow icon"
              />
          
        </div>
      </>
    );
  }
  
  export default ImageGallery;
  