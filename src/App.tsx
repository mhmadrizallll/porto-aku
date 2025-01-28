import { Routes, Route } from "react-router";

import NavbarComponent from "./components/NavbarComponent";
// import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import AboutPage from "./pages/AboutPage";
import PortofolioPage from "./pages/PortofolioPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/service" Component={ServicePage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/portofolio" Component={PortofolioPage} />
        <Route path="/contact" Component={ContactPage} />
      </Routes>

      {/* <FooterComponent /> */}
    </>
  );
}

export default App;
