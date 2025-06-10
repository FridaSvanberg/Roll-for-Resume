import './App.css';
import About from './components/About';
import DesktopHeader from './components/DesktopHeader';
import CampaignLog from './components/CampaignLog';
import Contact from './components/Contact';
import DownloadCV from './components/DownloadCV';
import DesktopFooter from './components/DesktopFooter';
import Proficiencies from './components/Proficiencies';
// import Spellbook from './components/Spellbook';
import Stats from './components/Stats';
import Traits from './components/Traits';

import bgPlaceholder from '../src/assets/bg-placeholder.png';

import showCspInfo from './utils/consoleMessage';
import MobileHeader from './components/MobileHeader';
import MobileNav from './components/MobileNav';
import MobileFooter from './components/MobileFooter';

function App() {
  showCspInfo();
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100 font-mono">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute left-4 top-4 bg-yellow-400 text-black font-bold px-4 py-2 rounded z-50 transition"
      >
        Skip to content
      </a>
      <header className="sr-only">
        <h1>Frida Svanberg - Front-End Developer</h1>
      </header>
      <MobileNav />
      <main
        id="main-content"
        className="min-h-screen bg-gray-900 text-gray-100 font-mono bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgPlaceholder})` }}
      >
        <div className="max-w-3xl mx-auto bg-gray-800 border-4 border-yellow-500 rounded-xl rounded-b-none md:rounded-b-xl shadow-xl p-6 space-y-6">
          <MobileHeader />
          <DesktopHeader />
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
      <MobileFooter />
      <DesktopFooter />
    </div>
  );
}

export default App;
