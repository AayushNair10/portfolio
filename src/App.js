import './App.css';
import About from './components/About';
import Activities from './components/Activities';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Skills from './components/Skills';
import TopNav from './components/TopNav';
function App() {
  return (
    <div className="app">
      <TopNav/>
      <About />
      <Skills/>
      <Activities/>
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
