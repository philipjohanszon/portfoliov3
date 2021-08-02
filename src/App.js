import './App.css';
import MainContainer from './components/mainContainer/mainContainer';
import Navbar from './components/navbar/navbar';
import Top from './components/top/top';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import Contact from './components/contact/contact';
import ContactModalButton from './components/contact/contactModal/contactModalButton/contactModalButton';
import ContactModal from './components/contact/contactModal/contactModal'

function App() {
  return (
    <MainContainer>
      <Navbar />
      <Top />
      <About />
      <Projects />
      <Skills />
      <Contact />

      <ContactModalButton/>
      <ContactModal />
    </MainContainer>
  );
}

export default App;
