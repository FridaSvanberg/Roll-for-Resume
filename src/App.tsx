import './App.css';
import About from './components/About';
import CampaignLog from './components/CampaignLog';
import Contact from './components/Contact';
import DownloadCV from './components/DownloadCV';
import Footer from './components/Footer';
import Header from './components/Header';
import Proficiencies from './components/Proficiencies';
// import Spellbook from './components/Spellbook';
import Stats from './components/Stats';
import Traits from './components/Traits';

import bgPlaceholder from '../src/assets/bg-placeholder.png';

import { useEasterEgg } from './hooks/useEasterEgg';

function App() {
  useEasterEgg();
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute left-4 top-4 bg-yellow-400 text-black font-bold px-4 py-2 rounded z-50 transition"
      >
        Skip to content
      </a>
      <header className="sr-only">
        <h1>Frida Svanberg - Front-End Developer</h1>
      </header>
      <main
        id="main-content"
        className="min-h-screen bg-gray-900 text-gray-100 font-mono bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgPlaceholder})` }}
      >
        <div className="max-w-3xl mx-auto bg-gray-800 border-4 border-yellow-500 rounded-xl shadow-xl p-6 space-y-6">
          <Header />
          <About />
          <Stats />
          <Proficiencies />
          <Traits />
          <CampaignLog />
          {/* <Spellbook /> */}
          <DownloadCV />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
