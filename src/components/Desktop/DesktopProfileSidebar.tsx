import ProfileCard from '../ProfileCard';
import TechStatBlock from '../TechStatBlock';
import AccessibilityModal from '../AccessibilityModal';
import D8EasterEgg from '../D8EasterEgg';

const DesktopProfileSidebar = () => (
  <div className="flex flex-col h-full justify-between">
    <div className="space-y-5">
      <ProfileCard />
      <TechStatBlock />
      <D8EasterEgg />
      <AccessibilityModal />
    </div>
    <div className="mt-6 text-center text-sm italic text-violet-400">
      "Roll with it!"
      <br />
      <span className="text-xs text-violet-300">
        Always coding with bardic inspiration
      </span>
    </div>
  </div>
);
export default DesktopProfileSidebar;
