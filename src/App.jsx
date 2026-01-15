import Nav from "./components/pages/Nav-Bar";
import LandingPage from "./components/pages/Landing-Page";
import AboutSection from "./components/pages/About-section";
import Service from "./components/pages/Services-Section";

const App = () => {
  return (
    <section className="">
      <Nav />
      <LandingPage />
      <AboutSection />
      <Service />
    </section>
  );
};

export default App;
