import Footer from "../footer";
import Navbar from "../navbar";

function LandingLayout({ children }: any) {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default LandingLayout;
