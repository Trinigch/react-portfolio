import styled from 'styled-components';
import jsPDF from 'jspdf';

export default function Resume() {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFont('Helvetica', 'normal');
    
    // Título
    doc.setFontSize(18);
    doc.text("Trinidad Peterson", 20, 20);
    doc.setFontSize(12);
    doc.text("trinigch@gmail.com", 20, 30);
    doc.text("Minneapolis, MN", 20, 35);
      
    // Separador
    doc.line(20, 50, 190, 50);

    // Resumen profesional
    doc.setFontSize(16);
    doc.text("Professional Summary", 20, 60);
    doc.setFontSize(12);
    doc.text(
      "Accomplished Full Stack Web Developer with a robust foundation in Electronic Engineering and a commitment to continuous improvement. " +
      "Known for seamlessly combining creativity and analytical problem-solving to develop user-friendly applications. Adept at collaborating within Agile teams, meeting tight deadlines, and receiving recognition for outstanding performance. Praised for strong organizational skills, adaptability, and unwavering attention to detail, regardless of project complexity.",
      20, 70, { maxWidth: 170 }
    );

    // Educación
    doc.setFontSize(16);
    doc.text("Education", 20, 130);
    doc.setFontSize(12);
    doc.text("University of Minnesota", 20, 140);
    doc.text("Full-Stack Developer Certification", 20, 145);
    doc.text("December 2024", 20, 150);
    doc.text("University of Buenos Aires", 20, 160);
    doc.text("Master Degree in Electronic Engineering", 20, 165);
    doc.text("December 2016", 20, 170);

    // Habilidades técnicas
    doc.setFontSize(16);
    doc.text("Technical Skills", 20, 180);
    doc.setFontSize(12);
    doc.text(
      "Frontend Development: HTML, CSS, JavaScript, JQuery, Bootstrap, AJAX, React", 20, 190);
    doc.text(
      "Backend Development: Node.js, Express.js, RESTful APIs, MVC Paradigm", 20, 195);
    doc.text(
      "Databases: SQL, NoSQL, MongoDB, Sequelize, SQLite", 20, 200);
    doc.text(
      "Full Stack Expertise: MERN Stack, GraphQL (Apollo Server/Client)", 20, 205);
    doc.text(
      "Version Control & Collaboration: Git, GitHub, Git Actions, Agile Development, Team Collaboration", 20, 210);
    doc.text(
      "Cloud & Deployment: Azure, Render", 20, 215);

    // Experiencia profesional
    doc.setFontSize(16);
    doc.text("Relevant Work Experience", 20, 230);
    doc.setFontSize(12);
    doc.text("Epidata", 20, 240);
    doc.text("Full Stack Developer", 20, 245);
    doc.text("Buenos Aires, Argentina", 20, 250);
    doc.text("Jul 2021 – Feb 2024", 20, 255);
    doc.text(
      "- Collaborated with Agile teams, receiving recognition for performance.", 20, 260, { maxWidth: 170 }
    );
    doc.text(
      "- Enhanced code quality and maintainability by implementing best practices.", 20, 265, { maxWidth: 170 }
    );
    doc.text(
      "- Demonstrated exceptional organizational and time-management skills.", 20, 270, { maxWidth: 170 }
    );

    // Descargar PDF
    doc.save("Trinidad_Peterson_Resume.pdf");
  };

  return (
    <Container>
      <Title>Resume</Title>
      <ResumeContent>
        <Section>
          <h2>Professional Summary</h2>
          <p>
            Accomplished Full Stack Web Developer with a robust foundation in Electronic Engineering and a commitment to continuous improvement. Known for seamlessly combining creativity and analytical problem-solving to develop user-friendly applications. Adept at collaborating within Agile teams, meeting tight deadlines, and receiving recognition for outstanding performance. Praised for strong organizational skills, adaptability, and unwavering attention to detail, regardless of project complexity.
          </p>
        </Section>
        <Section>
          <h2>Education</h2>
          <p><strong>University of Minnesota:</strong> Full-Stack Developer Certification, Dec 2024</p>
          <p><strong>University of Buenos Aires:</strong> Master Degree in Electronic Engineering, Dec 2016</p>
        </Section>
        <Section>
          <h2>Technical Skills</h2>
          <ul>
            <li>Frontend Development: HTML, CSS, JavaScript, JQuery, Bootstrap, AJAX, React</li>
            <li>Backend Development: Node.js, Express.js, RESTful APIs, MVC Paradigm</li>
            <li>Databases: SQL, NoSQL, MongoDB, Sequelize, SQLite</li>
            <li>Full Stack Expertise: MERN Stack, GraphQL (Apollo Server/Client)</li>
            <li>Version Control & Collaboration: Git, GitHub, Git Actions, Agile Development, Team Collaboration</li>
            <li>Cloud & Deployment: Azure, Render</li>
          </ul>
        </Section>
        <Section>
          <h2>Relevant Work Experience</h2>
          <p><strong>Epidata:</strong> Full Stack Developer (Jul 2021 – Feb 2024, Buenos Aires, Argentina)</p>
          <ul>
            <li>Collaborated with Agile teams to meet tight project deadlines, receiving recognition for performance.</li>
            <li>Enhanced code quality and maintainability by implementing best practices.</li>
            <li>Demonstrated exceptional organizational and time-management skills.</li>
          </ul>
        </Section>
      </ResumeContent>
      <DownloadButton onClick={generatePDF}>Download Resume</DownloadButton>
    </Container>
  );
}

// Estilos
const Container = styled.div`
  width: 90%;
  margin: auto;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
`;

const ResumeContent = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 8px;
`;

const Section = styled.div`
  margin-bottom: 20px;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p, li {
    font-size: 1rem;
    line-height: 1.5;
  }

  ul {
    margin-left: 20px;
  }
`;

const DownloadButton = styled.button`
  margin-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;