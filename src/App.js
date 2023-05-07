import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Technologies from './Components/Technologies';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Technologies />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
