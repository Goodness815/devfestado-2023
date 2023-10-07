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
              <h3 className={styles.headline3}>Inspiring Innovation Since 2013; 
            from Inception to Regional Impact</h3>
            <br/>

              GDG Ado-Ekiti's journey began in 2013, a pivotal year when a group of 
              passionate individuals came together with a shared vision: 
              to ignite a tech revolution in the heart of Ekiti state. 
              What started as a small community of tech enthusiasts soon blossomed 
              into a dynamic force for innovation, collaboration, and knowledge-sharing.

              </p>

              <p data-aos="zoom-in-left">
              <h3 className={styles.headline3}>Inception and Early Years:
              </h3>
              <br/>

              In its nascent stages, GDG Ado-Ekiti was a grassroots initiative, 
              driven by the belief that technology has the power to transform lives 
              and communities. The organization's founders, a dedicated cadre of developers, 
              entrepreneurs, and digital evangelists, set out to create a platform where local 
              talent could thrive and where innovation could flourish. From its very inception, 
              GDG Ado-Ekiti set its sights high, aiming not just to be a local tech group but a 
              catalyst for change throughout Ekiti state and beyond.

              </p>
              
              <p data-aos="zoom-in-left">
              <h3 className={styles.headline3}>Expanding Horizons:
              </h3>
              <br/>
              Over the years, GDG Ado-Ekiti tirelessly worked to fulfil its mission, 
              hosting a series of events, workshops, and meetups that brought together tech 
              enthusiasts from all walks of life. The organisation's dedication to promoting 
              innovation, education, and community building soon caught the attention of 
              neighbouring cities and institutions.
              One by one, nearby cities like Akure, Akoko, Oshogbo became part of GDG Ado-Ekiti's 
              extended network. Collaborations blossomed, and the collective impact grew. 
              As the organisation's reputation for quality tech events spread, even prominent 
              educational institutions in Ekiti state, such as FUOYE (Federal University Oye-Ekiti), 
              EKSU (Ekiti State University), and Fed Poly Ado (Federal Polytechnic Ado-Ekiti), 
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
            What Devfest is really about...
          </h1>
          <div className={styles.story_item}>
            <img
              src={arrowDown1}
              className={`${styles.story_icon} ${styles.story_icon_2}`}
              alt="arrow icon"
            />

            <div className={styles.story_item_texts}>
              <p data-aos="zoom-in-left">
              DevFest, short for Developer Festival, is a community-led tech event 
              hosted by Google Developer Groups (GDGs) worldwide. DevFest events focus 
              on various aspects of technology, including software development, web technologies, 
              mobile development, cloud computing, artificial intelligence, and more. 
              These events typically feature keynote speakers, workshops, hands-on coding sessions, 
              networking opportunities, and panel discussions.

              </p>

              <p data-aos="zoom-in-left">
              DevFest aims to bring together developers, tech enthusiasts, professionals, students, and entrepreneurs 
              to learn, share knowledge, and collaborate on innovative projects. It provides a 
              platform for attendees to explore the latest trends in technology, gain practical 
              skills through workshops, and connect with industry experts and fellow developers. 
              The specific focus and topics covered in a DevFest event can vary based on the GDG 
              organizing team's goals and the interests of the community it serves. 
              </p>

              <p data-aos="zoom-in-left">
              DevFest stands out as a flagship event within our repertoire. It represents an opportunity 
              to magnify our impact and fulfill our commitment to Ekiti state. Devfest is more than just 
              a conference; it is a celebration of innovation, a platform for skill development, and a 
              testament to the potential of our local tech ecosystem.
              In Ekiti state, as in many regions, the digital divide remains a significant challenge. 
              By organising events like DevFest, we aim to address this divide by fostering a culture of 
              digital skills development, innovation, and entrepreneurship. Devfest serves as a beacon, 
              guiding individuals towards a brighter future where technology is an enabler of progress, 
              and local talent can thrive on a global stage.
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
