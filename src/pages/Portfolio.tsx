
import styled from 'styled-components';
import Project from '../components/Project'; // Asegúrate de la ruta correcta
import Job1 from './../assets/img/Gallery.png'

// Aquí defines los datos de los proyectos
const projectsData = [
  {
    title: 'Gallery Project',
    deployedUrl: 'https://trinigch.github.io/Galery/',
    githubUrl: 'https://github.com/Trinigch/Galery',
    imageUrl:Job1,
  
  },
  {
    title: 'Shop Project',
    deployedUrl: 'https://trinigch.github.io/Shop/',
    githubUrl: 'https://github.com/Trinigch/Shop',
    imageUrl: './../assets/img/shop.png', // Reemplaza con la ruta correcta
  },
  {
    title: 'Register App',
    deployedUrl: 'https://curso-react-app-lista-ga-a835b.web.app',
    githubUrl: 'https://github.com/Trinigch/RegisterApp', // Asegúrate de tener esta URL
    imageUrl: './../assets/img/register.png', // Reemplaza con la ruta correcta
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