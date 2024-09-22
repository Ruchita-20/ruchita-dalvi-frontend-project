import './App.css';
import NavBar from './NavBar';
import Hero from './Hero';
import Divider from './Divider';
import About from './About';
import Projects from './Projects';
import Services from './Services';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Hero/>
        <About/>
        <Divider/>
        <Projects/>
        <Services/>
    </div>
  );
}

export default App;
