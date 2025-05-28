import './App.css';
import CampaignLog from './components/CampaignLog';
import Contact from './components/Contact';
import DownloadCV from './components/DownloadCV';
import Header from './components/Header';
import Proficiencies from './components/Proficiencies';
import Spellbook from './components/Spellbook';
import Stats from './components/Stats';
import Traits from './components/Traits';

function App() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 p-6 font-mono">
      <div className="max-w-3xl mx-auto bg-gray-800 border-4 border-yellow-500 rounded-xl shadow-xl p-6 space-y-6">
        <Header />
        <Stats />
        <Proficiencies />
        <CampaignLog />
        <Spellbook />
        <Traits />
        <DownloadCV />
        <Contact />
      </div>
    </main>
  );
}

export default App;
