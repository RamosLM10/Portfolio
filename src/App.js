import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Footer  from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Technologies from './components/Technologies/Technologies';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Welcome />
      <Projects />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;
