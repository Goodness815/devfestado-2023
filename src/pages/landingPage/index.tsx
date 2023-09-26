import LandingLayout from "../../components/layout";
import Showcase from "./sections/showcase";
import Story from "./sections/story";
import ThisYear from "./sections/thisYear";

function LandingPage() {
  return (
    <LandingLayout>
      <Showcase />
      <ThisYear />
      <Story />
    </LandingLayout>
  );
}

export default LandingPage;
