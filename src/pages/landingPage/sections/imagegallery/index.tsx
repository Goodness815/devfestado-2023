import styles from './imagegallery.module.css';
import imageOne from '../../../../assets/pictures/img1.png';
import imageTwo from '../../../../assets/pictures/img2.png';
import imageThree from '../../../../assets/pictures/img3.png';
import imageFour from '../../../../assets/pictures/img4.png';

function ImageGallery() {
  return (
    <>
      <div id="imagegallery" className={styles.image_gallery_container}>
        <div className={styles.image_gallery_container}>
          <div className={styles.image_gallery}>
            {/* <div className={styles.image_set}> */}
            <img src={imageOne} alt="image-one" className={styles.image_one} />
            <img src={imageTwo} alt="image-two" className={styles.image_two} />
            {/* </div> */}

            {/* <div className={styles.image_set}> */}
            <img
              src={imageThree}
              alt="image-three"
              className={styles.image_three}
            />

            <img
              src={imageFour}
              alt="image-four"
              className={styles.image_four}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageGallery;
