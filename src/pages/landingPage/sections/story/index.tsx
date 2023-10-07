import styles from "./story.module.css";
import storyImg from "../../../../assets/pictures/story.webp";
import storyImgLarge from "../../../../assets/pictures/story2.png";
import aboutImgLarge from "../../../../assets/pictures/devfestabout.png";
import Image from "../../../../components/images";
import arrowDown from "../../../../assets/icons/thisyear.png";
import arrowDown1 from "../../../../assets/icons/thisyear1.png";
import { useEffect, useState } from "react";

function Story() {
  const [isSmallViewport, setIsSmallViewport] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallViewport(window.innerWidth <= 999);
    };

    // Initial call to set the initial state
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div id="story" className={styles.story_container}>
        <div className={styles.story_inner}>
          <h1
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-anchor-placement="center-bottom"
          >
            Our 10 Years Story...
          </h1>
          <div className={styles.story_item}>
            <img
              src={arrowDown}
              className={styles.story_icon}
              alt="arrow icon"
            />
            {isSmallViewport ? (
              <Image
                src={storyImgLarge}
                color="#8AB4F8"
                className={styles.story_item_image}
              />
            ) : (
              <Image
                src={storyImg}
                color="#8AB4F8"
                className={styles.story_item_image}
              />
            )}
            <div className={styles.story_item_texts}>
              <p data-aos="zoom-in-left">
                Lorem ipsum dolor sit amet consectetur. Lectus at massa cursus
                nisi dictum proin aliquet tellus pulvinar. Viverra et elementum
                et porta aenean ac in quis fusce. Etiam lorem elementum
                hendrerit aliquam. Enim at sed in.Lorem ipsum dolor sit amet
                consectetur. Lectus at massa cursus nisi dictum proin aliquet
                tellus pulvinar. Viverra et elementum et porta aenean ac in quis
                fusce. Etiam lorem elementum hendrerit aliquam. Enim at sed
                in.Lorem ipsum dolor sit amet consectetur. Lectus at massa
                cursus nisi dictum proin aliquet tellus pulvinar. Viverra et
                elementum et porta aenean ac in quis fusce. Etiam lorem
                elementum hendrerit aliquam. Enim at sed in.Lorem ipsum dolor
                sit amet consectetur. Lectus at massa cursus nisi dictum proin
                aliquet tellus pulvinar
              </p>

              <p data-aos="zoom-in-left">
                Viverra et elementum et porta aenean ac in quis fusce. Etiam
                lorem elementum hendrerit aliquam. Enim at sed in.Lorem ipsum
                dolor sit amet consectetur. Lectus at massa cursus nisi dictum
                proin aliquet tellus pulvinar. Viverra et elementum et porta
                aenean ac in quis fusce. Etiam lorem elementum hendrerit
                aliquam. Enim at sed in.Lorem ipsum dolor sit amet consectetur.
                Lectus at massa cursus nisi dictum proin aliquet tellus
                pulvinar. Viverra et elementum et porta aenean ac in quis fusce.
                Etiam lorem elementum hendrerit aliquam. Enim at sed in.Lorem
                ipsum dolor sit amet consectetur. Lectus at massa cursus nisi
                dictum proin aliquet tellus pulvinar. Viverra et elementum et
                porta aenean ac in quis fusce. Etiam lorem elementum hendrerit
                aliquam. Enim at sed in.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="about" className={styles.story_container}>
        <div className={styles.story_inner}>
          <h1
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-anchor-placement="center-bottom"
          >
            What Devfest is really about...
          </h1>
          <div
            className={`${styles.story_item} ${styles.story_item_responsive}`}
          >
            <img
              src={arrowDown1}
              className={`${styles.story_icon} ${styles.story_icon_2}`}
              alt="arrow icon"
            />

            <div className={styles.story_item_texts}>
              <p data-aos="zoom-in-left">
                Lorem ipsum dolor sit amet consectetur. Lectus at massa cursus
                nisi dictum proin aliquet tellus pulvinar. Viverra et elementum
                et porta aenean ac in quis fusce. Etiam lorem elementum
                hendrerit aliquam. Enim at sed in.Lorem ipsum dolor sit amet
                consectetur. Lectus at massa cursus nisi dictum proin aliquet
                tellus pulvinar. Viverra et elementum et porta aenean ac in quis
                fusce. Etiam lorem elementum hendrerit aliquam. Enim at sed
                in.Lorem ipsum dolor sit amet consectetur. Lectus at massa
                cursus nisi dictum proin aliquet tellus pulvinar. Viverra et
                elementum et porta aenean ac in quis fusce. Etiam lorem
                elementum hendrerit aliquam. Enim at sed in.Lorem ipsum dolor
                sit amet consectetur. Lectus at massa cursus nisi dictum proin
                aliquet tellus pulvinar
              </p>

              <p data-aos="zoom-in-left">
                Viverra et elementum et porta aenean ac in quis fusce. Etiam
                lorem elementum hendrerit aliquam. Enim at sed in.Lorem ipsum
                dolor sit amet consectetur. Lectus at massa cursus nisi dictum
                proin aliquet tellus pulvinar. Viverra et elementum et porta
                aenean ac in quis fusce. Etiam lorem elementum hendrerit
                aliquam. Enim at sed in.Lorem ipsum dolor sit amet consectetur.
                Lectus at massa cursus nisi dictum proin aliquet tellus
                pulvinar. Viverra et elementum et porta aenean ac in quis fusce.
                Etiam lorem elementum hendrerit aliquam. Enim at sed in.Lorem
                ipsum dolor sit amet consectetur. Lectus at massa cursus nisi
                dictum proin aliquet tellus pulvinar. Viverra et elementum et
                porta aenean ac in quis fusce. Etiam lorem elementum hendrerit
                aliquam. Enim at sed in.
              </p>

            </div>

            {isSmallViewport ? (
              <Image
                src={aboutImgLarge}
                color="#81C995"
                className={styles.story_item_image}
              />
            ) : (
              <Image
                src={aboutImgLarge}
                color="#81C995"
                className={styles.story_item_image}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Story;
