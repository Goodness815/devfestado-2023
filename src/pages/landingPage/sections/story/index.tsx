import styles from './story.module.css';
import storyImg from '../../../../assets/pictures/story.webp';
import storyImgLarge from '../../../../assets/pictures/story2.png';
import aboutImgLarge from '../../../../assets/pictures/devfestabout.png';
import Image from '../../../../components/images';
import arrowDown from '../../../../assets/icons/thisyear.png';
import arrowRight from '../../../../assets/icons/arrowright.png';
import { useEffect, useState } from 'react';

function Story() {
  const [isSmallViewport, setIsSmallViewport] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallViewport(window.innerWidth <= 999);
    };

    // Initial call to set the initial state
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
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
              className={styles.story_icon2}
              alt="arrow icon"
            />
            {isSmallViewport ? (
              <>
                <Image
                  src={storyImgLarge}
                  color="#8AB4F8"
                  className={styles.story_item_image}
                />
                {/* <img
                  src={arrowMobile}
                  className={styles.story_iconmobile}
                  alt="arrow icon"
                /> */}
              </>
            ) : (
              <Image
                src={storyImg}
                color="#8AB4F8"
                className={styles.story_item_image}
              />
            )}
            <div className={styles.story_item_texts}>
              <p data-aos="zoom-in-left">
                GDG Ado-Ekiti's journey began in 2013, a pivotal year when a
                group of passionate individuals came together with a shared
                vision: to ignite a tech revolution in the heart of Ekiti state.
                What started as a small community of tech enthusiasts soon
                blossomed into a dynamic force for innovation, collaboration,
                and knowledge sharing.
              </p>

              <p data-aos="zoom-in-left">
                Over the years, GDG Ado-Ekiti tirelessly worked to fulfil its
                mission, hosting a series of events, workshops, and meet-ups
                that brought together tech enthusiasts from all walks of life.
                Our dedication to promoting innovation, education, and community
                building soon caught the attention of neighbouring cities and
                institutions. Collaborations blossomed, and our reputation for
                quality tech events spread, even prominent educational
                institutions in Ekiti state, such as FUOYE (Federal University
                Oye-Ekiti), EKSU (Ekiti State University), Fed Poly Ado (Federal
                Polytechnic Ado-Ekiti), and BOUESTI (Bamidele Olumilua
                University of Education, Science and Technology, Ikere-Ekiti)
                joined the movement.
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
            What DevFest is really about...
          </h1>
          <div
            className={`${styles.story_item} ${styles.story_item_responsive}`}
          >
            <img
              src={arrowRight}
              className={`${styles.story_icon} ${styles.story_icon_2}`}
              alt="arrow icon"
            />

            <div className={styles.story_item_texts}>
              <p data-aos="zoom-in-left">
                DevFest is a community-led tech event hosted by Google Developer
                Groups (GDGs) worldwide. DevFest events focus on various aspects
                of technology, including software development, web technologies,
                mobile development, cloud computing, artificial intelligence,
                and more. These events typically feature keynote speakers,
                workshops, hands-on coding sessions, networking opportunities,
                and panel discussions. It aims to bring together developers,
                tech enthusiasts, professionals, students, and entrepreneurs to
                learn, share knowledge, and collaborate on innovative projects.
              </p>

              <p data-aos="zoom-in-left">
                DevFest represents an opportunity to magnify our impact and
                fulfil our commitment to Ekiti state. DevFest is more than just
                a conference; it is a celebration of innovation, a platform for
                skill development, and a testament to the potential of our local
                tech ecosystem. By organising events like DevFest, we aim to
                address the digital divide by fostering a culture of digital
                skills development, innovation, and entrepreneurship.
              </p>
            </div>

            {isSmallViewport ? (
              <>
                <Image
                  src={aboutImgLarge}
                  color="#81C995"
                  className={styles.story_item_image}
                />
              </>
            ) : (
              <Image
                src={aboutImgLarge}
                color="#81C995"
                className={`${styles.story_item_image}`}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Story;
