import Navigation from './Navigation';

interface HeaderProps {
  setCurrentSection: (section: string) => void;
  currentSection: string;
}

function Header({ setCurrentSection, currentSection }: HeaderProps) {
  return (
    <header className="navbar">
      <div className="navbar-title">
        <a className="header-title">
          Trinidad Peterson
        </a>
      </div>
      <div>
        <Navigation setCurrentSection={setCurrentSection} currentSection={currentSection} />
      </div>
    </header>
  );
}

export default Header;