interface NavigationProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

function Navigation({ currentSection, setCurrentSection }: NavigationProps) {
  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <nav>
      <ul className="flex space-x-4">
        {sections.map((section) => (
          <li
            key={section}
            className={`cursor-pointer px-2 py-1 rounded transition-colors duration-300 ${
              currentSection === section 
                ? 'font-bold text-primary bg-primary-content' 
                : 'text-primary-content hover:text-primary hover:bg-primary-focus'
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