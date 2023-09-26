import { Routes, Route } from "react-router-dom";
import LandingPage from "./assets/pages/landingPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
