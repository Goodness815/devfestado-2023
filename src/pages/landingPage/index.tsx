import LandingLayout from "../../components/layout";
import { Marquee } from "./sections/marquee";
import Pitch from "./sections/pitch";
import Showcase from "./sections/showcase";
import Speakers from "./sections/speakers";
import Story from "./sections/story";
import ThisYear from "./sections/thisYear";
import Youtube from "./sections/youtube";
<<<<<<< HEAD
import CountdownTimer from "./sections/countdown/CountdownTimer"
import Twitter from "./sections/twitter";
=======
import CountdownTimer from "./sections/countdown/CountdownTimer";
>>>>>>> 784bbfb73c324f4ad1e3f7dc45f942d39a102900

function LandingPage() {
  // Create a ref for the Pitch section

  return (
    <LandingLayout>
      <Showcase />
      <ThisYear />
      <Story />
      <Marquee />
      <Pitch />
      <Speakers />
      <Twitter />
      <Youtube />
      <CountdownTimer />
    </LandingLayout>
  );
}

export default LandingPage;
