

interface NavigationProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

function Navigation({ currentSection, setCurrentSection }: NavigationProps) {
  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <nav>
      <ul className="navbar-links">
        {sections.map((section) => (
          <li
            key={section}
            className={`navbar-item ${currentSection === section ? 'active' : ''}`}
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