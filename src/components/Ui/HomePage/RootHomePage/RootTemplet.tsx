import Hero from "../HeroSection/HeroSection";
import Statistics from "../HeroSection/Statistics";
import About from "../About/About";
import Education from "../Education/Education";
import Experiences from "../Experiences/Experiences";
import Projects from "../Projects/Projects";
import Certifications from "../Certifications/Certifications";
import Testimonials from "../Testimonials/Testimonials";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Newsletter from "../Newsletter/Newsletter";
import Publications from "../Publications/Publications";

const RootHomePage = () => {
  return (
    <>
      <Hero />
      <Statistics />
      <About />
      <Education />
      <Publications />
      <Experiences />
      <Projects />
      <Certifications />
      <Testimonials />
      <Blog />
      <Contact />
      <Newsletter />
    </>
  );
};

export default RootHomePage;
