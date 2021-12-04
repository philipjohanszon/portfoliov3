import MainContainer from "./sections/mainContainer/mainContainer";
import Navbar from "./components/navbar/navbar";
import Top from "./sections/top/top";
import About from "./sections/about/about";
import Projects from "./sections/projects/projects";
import Skills from "./sections/skills/skills";
import Contact from "./sections/contact/contact";
import ContactFloater from "./components/contactFloater/contactFloater";
import ContactModal from "./components/contactModal/contactModal";

function App() {
  return (
    <MainContainer>
      <Navbar />
      <Top />
      <About />
      <Projects />
      <Skills />
      <Contact />

      <ContactFloater />
      <ContactModal />
    </MainContainer>
  );
}

export default App;
