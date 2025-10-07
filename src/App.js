import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Services from './components/services/services';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Scrollup from './components/scrollup/scrollup';
import Portfolio from './components/portfolio/portfolio';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Portfolio/>
        <Contact />
      </main>
      <Footer />
      <Scrollup />
    </>
  );
}

export default App;
