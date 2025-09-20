import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Services from './components/services/services';
import Qualification from './components/qualification/qualification';
import Contact from './components/contact/contact';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
              <Home/>
              <About/>
              <Skills/>
              <Services/>
              <Qualification/>
              <Contact/>
      </main>
    </>
  );
}

export default App;
