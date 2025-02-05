import Navigation from './Navigation';

interface HeaderProps {
  setCurrentSection: (section: string) => void;
  currentSection: string;
}

function Header({ setCurrentSection, currentSection }: HeaderProps) {
  return (
    <header className="navbar  text-[#1F3A64] p-6 shadow-md border-b-2 border-[#B0B0B0]">
      <div className="   color:#1F3A64">
        <a className="text-2xl  color:#1F3A64 font-bold tracking-wide hover:text-[#D9A7B5] transition-colors">
        Trinidad Peterson
        </a>
      </div>
      <div >
        <Navigation setCurrentSection={setCurrentSection} currentSection={currentSection} />
      </div>
    </header>
  );
}

export default Header;