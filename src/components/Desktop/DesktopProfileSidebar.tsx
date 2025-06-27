import ProfileCard from '../ProfileCard';
import TechStatBlock from '../TechStatBlock';
import AccessibilityModal from '../AccessibilityModal';
import D8EasterEgg from '../D8EasterEgg';

const DesktopProfileSidebar = () => (
  // <div className="hidden md:flex flex-col items-center bg-zinc-900 rounded-2xl shadow-2xl p-8 border-4 border-violet-600 gap-5 w-full">
  <div>
    <ProfileCard />
    <TechStatBlock />
    <D8EasterEgg />
    <AccessibilityModal />
    <p className="mt-4 italic text-xs text-violet-400">"Roll with it!"</p>
  </div>
);

export default DesktopProfileSidebar;
