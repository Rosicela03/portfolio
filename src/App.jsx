import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import Qualifications from './components/Qualifications/Qualifications.jsx'
import Projects from './components/Projects/Projects.jsx'
import { Contact } from './components/Contact/Contact';

function App() {
  
  return (
    <div className={styles.App}>
          <Navbar />
          <Hero /> 
          <About />
          <Qualifications />
          <Projects />
          < Contact />
          


    </div>


  )
}

export default App
