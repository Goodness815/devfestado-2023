import styles from "./story.module.css";
import storyImg from "../../../../assets/pictures/story.webp";
import storyImgLarge from "../../../../assets/pictures/story2.png";
import Image from "../../../../components/images";
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
    <div className={styles.story_container}>
      <div className={styles.story_inner}>
        <h1
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-anchor-placement="center-bottom"
        >
          Our 10 Years Story...
        </h1>
        <div className={styles.story_item}>
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
              nisi dictum proin aliquet tellus pulvinar. Viverra et elementum et
              porta aenean ac in quis fusce. Etiam lorem elementum hendrerit
              aliquam. Enim at sed in.Lorem ipsum dolor sit amet consectetur.
              Lectus at massa cursus nisi dictum proin aliquet tellus pulvinar.
              Viverra et elementum et porta aenean ac in quis fusce. Etiam lorem
              elementum hendrerit aliquam. Enim at sed in.Lorem ipsum dolor sit
              amet consectetur. Lectus at massa cursus nisi dictum proin aliquet
              tellus pulvinar. Viverra et elementum et porta aenean ac in quis
              fusce. Etiam lorem elementum hendrerit aliquam. Enim at sed
              in.Lorem ipsum dolor sit amet consectetur. Lectus at massa cursus
              nisi dictum proin aliquet tellus pulvinar
            </p>
            
            <p data-aos="zoom-in-left">
              Viverra et elementum et porta aenean ac in quis fusce. Etiam lorem
              elementum hendrerit aliquam. Enim at sed in.Lorem ipsum dolor sit
              amet consectetur. Lectus at massa cursus nisi dictum proin aliquet
              tellus pulvinar. Viverra et elementum et porta aenean ac in quis
              fusce. Etiam lorem elementum hendrerit aliquam. Enim at sed
              in.Lorem ipsum dolor sit amet consectetur. Lectus at massa cursus
              nisi dictum proin aliquet tellus pulvinar. Viverra et elementum et
              porta aenean ac in quis fusce. Etiam lorem elementum hendrerit
              aliquam. Enim at sed in.Lorem ipsum dolor sit amet consectetur.
              Lectus at massa cursus nisi dictum proin aliquet tellus pulvinar.
              Viverra et elementum et porta aenean ac in quis fusce. Etiam lorem
              elementum hendrerit aliquam. Enim at sed in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
