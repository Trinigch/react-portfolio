
import Navigation from './Navigation';

interface HeaderProps {
  setCurrentSection: (section: string) => void;
  currentSection: string;
}

function Header({ setCurrentSection, currentSection }: HeaderProps) {
  return (
    <header className="navbar bg-primary text-primary-content p-4">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Trinidad Peterson</a>
      </div>
      <div className="flex-none">
        <Navigation setCurrentSection={setCurrentSection} currentSection={currentSection} />
      </div>
    </header>
  );
}

export default Header;