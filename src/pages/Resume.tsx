import styled from 'styled-components';

export default function Resume() {
  const Container = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 40px auto;
    padding: 40px;
    background-color: var(--white-background);
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
  `;

  const Title = styled.h1`
    font-size: 3rem;
    color: #1f3a64; /* Azul Marino */
    margin-bottom: 20px;
  `;

  const DownloadButton = styled.a`
    display: inline-block;
    padding: 12px 20px;
    margin-bottom: 30px;
    background-color: var(--dark-accent);
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 5px;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #153259; /* Un tono más oscuro para el hover */
      box-shadow: 0 4px 10px rgba(31, 58, 100, 0.3);
    }
  `;

  const SectionTitle = styled.h2`
    font-size: 2rem;
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
    margin-bottom: 24px;
    color: #213547;
    text-align: justify;
  `;

  const SkillsList = styled.ul`
    list-style-type: disc;
    text-align: left;
    padding-left: 25px;
    font-size: 1.4rem;
    line-height: 1.8;
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
    <div className="">
      <Title>Resume</Title>
      <DownloadButton href="/path/to/resume.pdf" download>
        Download Resume
      </DownloadButton>

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
          <a href="https://www.linkedin.com/in/trinidad-peterson-35564211" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
        </p>
      </ContactInfo>
      </div>
    </Container>
  );
}
