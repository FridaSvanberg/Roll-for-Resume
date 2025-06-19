import ProfileCard from '../ProfileCard';
import CharacterSheetTable from '../CharacterSheetTable';
import TechStatBlock from '../TechStatBlock';
import D20EasterEgg from '../D20EasterEgg';
import AccessibilityModal from '../AccessibilityModal';

const DesktopProfileSidebar = () => (
  <div className="hidden md:flex flex-col items-center bg-zinc-900 rounded-2xl shadow-2xl p-8 border-4 border-violet-600 gap-5 w-full">
    <ProfileCard />
    <CharacterSheetTable />
    <TechStatBlock />
    <D20EasterEgg />
    <AccessibilityModal />
    <p className="mt-4 italic text-xs text-violet-400">"Roll with it!"</p>
  </div>
);

export default DesktopProfileSidebar;
