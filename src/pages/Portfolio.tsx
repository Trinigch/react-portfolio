import styled from 'styled-components';
import Project from '../components/Project'; 
//import Job1 from './../assets/img/Gallery.png';
import BookSearch from './../assets/img/login.png';
import TriviaTitans from './../assets/img/bg2.png';
import ThemedTimer from './../assets/img/Themed-Timer.png';
import WeatherDashboard from './../assets/img/WeatherDashboard.png';

import WeddingPage from './../assets/img/weddingpage.png';
import Wedding from './../assets/img/wedding.png';

const Container = styled.div`
  width: 100%;
  margin: auto;
    
  display: flex;
  flex-wrap: wrap;


   @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #1f3a64; /* Azul Marino */



`;

const projectsData = [
    {
    title: 'Wedding',
    deployedUrl: 'https://jeremiahandtriniwedding.onrender.com/about-wedding/',
    githubUrl: 'https://github.com/Trinigch/Wedding.git',
    imageUrl: Wedding,
  },
  {
    title: 'WeddingPage',
    deployedUrl: 'https://triniandjeremiah.netlify.app/',
    githubUrl: 'https://github.com/Trinigch/WeddingPage.git',
    imageUrl: WeddingPage,
  },
 
  {
    title: 'Book-Search-Engine',
    deployedUrl: 'https://book-search-engine-1-3xpc.onrender.com',
    githubUrl: 'https://github.com/Trinigch/Book-Search-Engine.git',
    imageUrl: BookSearch,
  },
  {
    title: 'TriviaTitans',
    deployedUrl: 'https://github.com/kyand38/Trivia-Titans.git',
    githubUrl: 'https://trivia-titans.onrender.com/',
    imageUrl: TriviaTitans,
  },
  {
    title: 'Themed-Timer',
    deployedUrl: 'https://themed-timer.netlify.app/',
    githubUrl: 'https://github.com/Trinigch/Themed-Timer.git',
    imageUrl: ThemedTimer,
  },
  {
    title: 'Weather-Dashboard',
    deployedUrl: 'https://weather-dashboard-1-dd0l.onrender.com/',
    githubUrl: 'https://github.com/Trinigch/Weather-Dashboard.git',
    imageUrl: WeatherDashboard,
  },
 
];

export default function Portfolio() {
  return (
    <Container>
      <div className="min-h-screen w-screen flex flex-wrap  items-center justify-center">
      <Title>Portfolio</Title>
        {projectsData.map((project) => (
          <Project 
            key={project.title} 
            title={project.title} 
            deployedUrl={project.deployedUrl} 
            githubUrl={project.githubUrl} 
            imageUrl={project.imageUrl} 
          />
        ))}
</div>
    </Container>
  );
}