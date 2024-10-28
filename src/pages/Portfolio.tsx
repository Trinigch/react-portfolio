
import styled from 'styled-components';
import Project from '../components/Project'; // Asegúrate de la ruta correcta
import Job1 from './../assets/img/Gallery.png'
import Job2 from './../assets/img/bg.jpg'
import Job3 from './../assets/img/Employee-Tracker.jpeg'
import Job4 from './../assets/img/Vehicle-Builder.jpg'
import Job5 from './../assets/img/Themed-Timer.png'
import Job6 from './../assets/img/register.png'

// Aquí defines los datos de los proyectos
const projectsData = [
  {
    title: 'Themed-Timer',
    deployedUrl: 'https://trinigch.github.io/Themed-Timer/',
    githubUrl: 'https://github.com/Trinigch/Themed-Timer.git', 
    imageUrl: Job5,
  },
  {
    title: 'Gallery Project',
    deployedUrl: 'https://trinigch.github.io/Galery/',
    githubUrl: 'https://github.com/Trinigch/Galery',
    imageUrl: Job1,
  
  },
  {
    title: 'Weather-Dashboard',
    deployedUrl: '',
    githubUrl: 'https://github.com/Trinigch/Weather-Dashboard.git',
    imageUrl: Job2, 
  },
  {
    title: 'Employee-Tracker',
    deployedUrl: 'https://curso-react-app-lista-ga-a835b.web.app',
    githubUrl: 'https://github.com/Trinigch/Employee-Tracker.git', 
    imageUrl: Job3, 
  },
  {
    title: 'Vehicle-Builder',
    deployedUrl: 'https://curso-react-app-lista-ga-a835b.web.app',
    githubUrl: 'https://github.com/Trinigch/Vehicle-Builder.git', 
    imageUrl: Job4, 
  },

  {
    title: 'Register App',
    deployedUrl: 'https://curso-react-app-lista-ga-a835b.web.app',
    githubUrl: 'https://github.com/Trinigch/RegisterApp', 
    imageUrl: Job6,
  },
  // Agrega más proyectos aquí
];

const Container = styled.div`
  width: 100%; /* Asegura que el contenedor ocupe todo el ancho */
  margin: auto; /* Centra el contenedor */
  padding: 20px; /* Espaciado interno */
  display: flex;
  flex-wrap: wrap; /* Permite que los elementos se envuelvan */
  justify-content: center; /* Centra los elementos */
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

export default function Portfolio() {
  return (
    <Container>
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
    </Container>
  );
}