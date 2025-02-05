interface NavigationProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

function Navigation({ currentSection, setCurrentSection }: NavigationProps) {
  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <nav>
      <ul className="flex space-x-4 color:#1F3A64 font-bold tracking-wide hover:text-[#D9A7B5] transition-colors">
        {sections.map((section) => (
          <li
            key={section}
            className={`cursor-pointer px-2 py-1  rounded transition-colors duration-300 ${
              currentSection === section 
                ? 'font-bold  bg-primary-content ' 
                : ' color:#1F3A64 hover:text-[#D9A7B5] hover:bg-primary-focus'
            }`}
            onClick={() => setCurrentSection(section)}
          >
            {section}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;