import styled from 'styled-components';
import avatarImage from './../assets/img/hero1.jpeg';

export default function Resume() {
  const Container = styled.div`
    width: 100%;
    margin: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    background-color: var(--white-background);   
    text-align: center;
    position: relative;
  `;
  
  const Avatar = styled.img`
    position: absolute;
    top: 20px; /* Ajusta la posición vertical */
    left: 20px; /* Ajusta la posición horizontal */
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 4px solid #F5F5F5; /* Borde blanco */
  `;

  const ResumeContainer = styled.div`
    width: 90%;
    max-width: 900px;
    margin: 100px auto 40px; /* Margen superior para evitar que quede pegado al nav */
    padding: 40px;
    background-color: var(--white-background);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: left;
  `;

  const ContentWrapper = styled.div`
    width: 100%;
    max-width: 800px; /* Define un ancho menor dentro del Resume */
    padding: 20px;
    background-color: var(--white-background);
    border-radius: 8px;
  `;

  const Title = styled.h1`
    font-size: 3rem;
    color: #1f3a64; /* Azul Marino */
    margin-bottom: 20px;
  `;

  const SectionTitle = styled.h2`
    font-size: 1.8rem;
    color: var(--dark-accent);
    margin-top: 30px;
    margin-bottom: 15px;
    text-align: left;
    border-bottom: 2px solid var(--neutral-color);
    padding-bottom: 5px;
  `;

  const Paragraph = styled.p`
    font-size: 1.4rem;
    line-height: 1.8;
      text-align: left;
    margin-bottom: 24px;
    color: #213547;
     @media(max-width:650px){
     font-size:1rem;
     }`;

  const SkillsList = styled.ul`
    list-style-type: disc;
    text-align: left;
    padding-left: 25px;
    font-size: 1.4rem;
    line-height: 1.6;
    @media(max-width:650px){
     font-size:1rem;
     };
  `;

  const ContactInfo = styled.div`
    font-size: 1.3rem;
    line-height: 1.8;
    margin-top: 20px;
    text-align: center;

    a {
      color: var(--dark-accent);
      text-decoration: none;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }
  `;

  return (
    <Container>
      <div className="min-h-screen w-screen flex items-center justify-center">
        <Avatar src={avatarImage} alt="Avatar" />
        <ResumeContainer>
          <Title>Resume</Title>
          <ContentWrapper>

            <SectionTitle>Personal Profile</SectionTitle>
            <Paragraph>
              Accomplished Full Stack Web Developer with a strong background in Electronic Engineering and a passion for innovative solutions. With over 4 years of experience in software development, I am adept at building and shipping full-stack software applications using TypeScript, Node.js, React, and AWS. I bring expertise in cloud computing, agile development, and creating seamless user experiences. Known for my problem-solving abilities, attention to detail, and collaborative work ethic, I thrive in fast-paced, dynamic startup environments.
            </Paragraph>

            <SectionTitle>Technical Skills</SectionTitle>
            <SkillsList>
              <li>Languages: HTML, CSS, JavaScript, SQL, NoSQL</li>
              <li>Frontend Development: HTML5, CSS3, JavaScript, React, jQuery, Bootstrap, AJAX, Progressive Web Apps</li>
              <li>Backend Development: Node.js, Express.js, RESTful APIs, MVC Paradigm, GraphQL (Apollo Server/Client)</li>
              <li>Databases: SQL, MongoDB, Sequelize, SQLite</li>
              <li>Full Stack Expertise: MERN Stack</li>
              <li>Cloud & Deployment: Firebase, Azure, Render</li>
              <li>Version Control & Collaboration: Git, GitHub, Agile Development, Team Collaboration</li>
              <li>Development Practices: API communication, responsive design, cloud-based services, testing, debugging, performance optimization</li>
              <li>Additional Skills: Computer science fundamentals, project demonstration, storytelling, and progressive web app development</li>
            </SkillsList>

            <SectionTitle>Experience</SectionTitle>
            <Paragraph>
              <strong>Full Stack Developer</strong><br />
              Epidata | Jul 2021 – Feb 2024<br />
              Led full-stack development, building scalable and maintainable web applications with Node.js and React. Worked in an agile team, contributing to product design, development, and deployment on cloud platforms (Azure, Render). Improved post-deployment quality by implementing best practices, reducing bugs, and enhancing user experience. Quickly adapted to new technologies and challenges, receiving recognition for outstanding performance.
            </Paragraph>

            <SectionTitle>Additional Work Experience</SectionTitle>
            <Paragraph>
              <strong>Project Engineer</strong><br />
              Conuar | Jan 2018 - Jul 2021<br />
              Developed software solutions using Visual Studio and JavaScript, with a focus on SQLite database management. Created a fault detection system for surface devices, incorporating deep learning techniques to improve automation. Enhanced object identification and automation processes through advanced machine learning techniques.
            </Paragraph>

            <SectionTitle>Projects</SectionTitle>
            <Paragraph>
              <strong>Trivia Titans:</strong><br />
              Trivia Titans is a trivia game platform with three game modes, profile editing, and leaderboards, powered by the Quizmania API and JWT-secured authentication.<br />
              Tools/Languages Used: React, GraphQL, MongoDB, JWT, Apollo Server, Quizmania API.<br />
              [Trivia Titans GitHub](https://www.triviatitans.com)
            </Paragraph>

            <SectionTitle>Education</SectionTitle>
            <Paragraph>
              <strong>Boot Camp Certificate:</strong><br />
              University of Minnesota, Minneapolis, MN | December 2024<br />
              A 12-week intensive program focused on developing technical programming skills in HTML, CSS, Git, JavaScript, Bootstrap, the DOM, APIs, jQuery, JSON, and AJAX. It emphasizes team collaboration, agile development, and project demonstration and storytelling. Expertise in Node.js, ES6, object-oriented programming, Express.js, SQL, the MVC paradigm, Sequelize, and testing. Progressive Web Apps, React, NoSQL, the MERN stack, and computer science.
            </Paragraph>
            <Paragraph>
              <strong>Master’s Degree in Electronic Engineering:</strong><br />
              University of Buenos Aires, Buenos Aires, Argentina | December 2016
            </Paragraph>

            <SectionTitle>Contact Me</SectionTitle>
            <ContactInfo>
              <p>Minneapolis, MN, United States</p>
              <p>+1 (651) 382-6116</p>
              <p><a href="mailto:trinigch@gmail.com">trinigch@gmail.com</a></p>
              <p>
                <a href="https://www.linkedin.com/in/trinidad-peterson-35564211" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </p>
            </ContactInfo>

          </ContentWrapper>
        </ResumeContainer>
      </div>
    </Container>
  );
}