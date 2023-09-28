import LandingLayout from "../../components/layout";
import Pitch from "./sections/pitch";
import Showcase from "./sections/showcase";
import Speakers from "./sections/speakers";
import Story from "./sections/story";
import ThisYear from "./sections/thisYear";

function LandingPage() {
  return (
    <LandingLayout>
      <Showcase />
      <ThisYear />
      <Story />
      <Pitch />
      <Speakers />
    </LandingLayout>
  );
}

export default LandingPage;
