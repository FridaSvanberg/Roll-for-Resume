import './App.css';
import About from './components/About';
import CampaignLog from './components/CampaignLog';
import Contact from './components/Contact';
import DownloadCV from './components/DownloadCV';
import DesktopFooter from './components/Desktop/DesktopFooter';
import Proficiencies from './components/Proficiencies';
import Traits from './components/Traits';

import bgPlaceholder from '../src/assets/bg-placeholder.png';

import showCspInfo from './utils/consoleMessage';
import MobileHeader from './components/Mobile/MobileHeader';
import MobileNav from './components/Mobile/MobileNav';
import MobileFooter from './components/Mobile/MobileFooter';

import DesktopProfileSidebar from './components/Desktop/DesktopProfileSidebar';
import CharacterSheetBanner from './components/CharacterSheetBanner';
import DesktopHeader from './components/Desktop/DesktopHeader';

function App() {
  showCspInfo();
  return (
    <div
      className="min-h-screen w-full flex flex-col bg-gray-900 text-gray-100 font-mono overflow-x-hidden"
      style={{
        backgroundColor: '#101828',
        backgroundImage: `url(${bgPlaceholder})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
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
        className="min-h-screen bg-gray-900 text-gray-100 font-mono flex flex-col md:flex-row md:p-8 md:space-x-8"
      >
        <aside className="hidden md:flex md:flex-col w-[340px] lg:w-96 bg-zinc-900 border-4 border-violet-600 rounded-2xl shadow-2xl p-8 gap-5">
          <DesktopProfileSidebar />
        </aside>
        <section className="flex-1 bg-gray-800 border-4 border-yellow-500 rounded-xl md:rounded-r-xl shadow-xl p-8 space-y-6">
          <MobileHeader />
          <DesktopHeader />
          <About />
          <CharacterSheetBanner />
          <Proficiencies />
          <Traits />
          <CampaignLog />
          <DownloadCV />
          <Contact />
        </section>
      </main>
      <MobileFooter />
      <DesktopFooter />
    </div>
  );
}

export default App;
