import LandingLayout from "../../components/layout";
import { Marquee } from "./sections/marquee";
// import ImageGallery from './sections/imagegallery';
import Pitch from "./sections/pitch";
import Showcase from "./sections/showcase";
import Story from "./sections/story";
import ThisYear from "./sections/thisYear";
import Youtube from "./sections/youtube";
import CountdownTimer from "./sections/countdown/CountdownTimer";
import Twitter from "./sections/twitter";
// import Speakers from "./sections/speakers";
function LandingPage() {
  // Create a ref for the Pitch section

  return (
    <LandingLayout>
      <Showcase />
      <ThisYear />
      <Story />
      <Marquee />
      {/* <ImageGallery/> */}
      <Pitch />
      {/* <Speakers /> */}
      <Twitter />
      <Youtube />
      <CountdownTimer />
    </LandingLayout>
  );
}

export default LandingPage;
