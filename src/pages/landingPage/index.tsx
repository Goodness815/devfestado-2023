import LandingLayout from "../../components/layout";
import { Marquee } from "./sections/marquee";
import Pitch from "./sections/pitch";
import Showcase from "./sections/showcase";
import Speakers from "./sections/speakers";
import Story from "./sections/story";
import ThisYear from "./sections/thisYear";
import Youtube from "./sections/youtube";

function LandingPage() {
  return (
    <LandingLayout>
      <Showcase />
      <ThisYear />
      <Story />
      <Marquee />
      <Pitch />
      <Speakers />
      <Youtube />
    </LandingLayout>
  );
}

export default LandingPage;
