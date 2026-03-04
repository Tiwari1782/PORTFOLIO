import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Skills from "../sections/Skills";
import CodingProfiles from "../sections/CodingProfiles";
import Projects from "../sections/Projects";
import GitHub from "../sections/GitHub";
import Education from "../sections/Education";
import Achievements from "../sections/Achievements";
import Testimonials from "../sections/Testimonials";
import FunFacts from "../sections/FunFacts";
import Contact from "../sections/Contact";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <GitHub />
      <CodingProfiles />
      <Education />
      <Achievements />
      <Testimonials />
      <FunFacts />
      <Contact />
    </main>
  );
};

export default Home;