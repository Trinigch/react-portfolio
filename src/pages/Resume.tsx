import styled from 'styled-components';

export default function Resume() {
  const Container = styled.div`
  width: 100%; /* Asegura que el contenedor ocupe todo el ancho */
  margin: auto; /* Centra el contenedor */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  overflow: hidden;
`;

const Paragraph = styled.p`
  font-size: 1.2rem; /* Aumenta el tamaño de la fuente */
  margin-bottom: 16px; /* Agrega espacio entre los párrafos */
`;
  const SectionTitle = styled.h2`
    font-size: 1.5rem;
    margin-top: 20px;
    color: teal;
  `;

  const SkillsList = styled.ul`
    list-style-type: disc;
    margin-left: 20px;
  `;

  const DownloadLink = styled.a`
    display: inline-block;
    margin-top: 20px;
    padding: 10px 15px;
    background-color: teal;
    color: #fff;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;

    &:hover {
      background-color: darkcyan;
    }
  `;

  const ContactInfo = styled.div`
    margin-top: 20px;
    font-size: 1.1rem;
    line-height: 1.8;
  `;

  return (
    <Container>
     <div className="min-h-screen w-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">Resume</h1>
      <p className="mt-4 text-lg">

      <DownloadLink href="/path/to/resume.pdf" download>
        Download Resume
      </DownloadLink>

      <SectionTitle>Personal Profile</SectionTitle>
      <Paragraph>
        I am Maria Renata, a Full Stack Web Developer familiar and comfortable using a wide range of
        technologies. I am excited to collaborate with software development teams.
      </Paragraph>

      <SectionTitle>Technical Skills</SectionTitle>
      <SkillsList>
        <li>JavaScript, React, Node.js</li>
        <li>Firebase, Express, MySQL, MongoDB</li>
        <li>PHP 8, Spring Boot, Spring Cloud, REST APIs, Docker</li>
        <li>Python, Agile methodology - JIRA, GitHub</li>
        <li>HTML, CSS, and Responsive Design</li>
      </SkillsList>

      <SectionTitle>Experience</SectionTitle>
      <Paragraph>
        <strong>Software Developer</strong> <br />
        Epidata | Jul 2021 - Mar 2024
      </Paragraph>
      <Paragraph>
        Team member on complex application development projects. Translated client needs into clear
        technical specifications, created and updated documentation, designed and developed modular
        applications, and maintained databases.
      </Paragraph>

      <SectionTitle>Education</SectionTitle>
      <Paragraph>
        <strong>Master’s Degree in Electronic Engineering</strong> <br />
        University of Buenos Aires, 2016
      </Paragraph>
      <Paragraph>
        <strong>Deep Learning Course</strong> <br />
        Technological Institute ITBA, 2019 (102 hours)
      </Paragraph>

      <SectionTitle>Contact Me</SectionTitle>
      <ContactInfo>
        <p>MN, United States</p>
        <p>+1 (651) 382-6116</p>
        <p>
          <a href="mailto:trinigch@gmail.com">trinigch@gmail.com</a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/trinidad-peterson-3556421" target="_blank" rel="noopener noreferrer">
            www.linkedin.com/in/trinidad-peterson-3556421
          </a>
        </p>
      </ContactInfo>
      </p>
      </div>
    </Container>
  );
}