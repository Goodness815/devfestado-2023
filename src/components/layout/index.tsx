import Footer from "../footer";
import Navbar from "../navbar";

function LandingLayout({ children }: any) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default LandingLayout;
