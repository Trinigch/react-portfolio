
import styled from 'styled-components';

interface ProjectProps {
  title: string;
  deployedUrl: string;
  githubUrl: string;
  imageUrl: string;
}


const Card = styled.div`
  display: flex; /* Usa flexbox para alinear elementos */
  align-items: center; /* Centra verticalmente los elementos */
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 10px; /* Agrega espacio interno */
`;

const Image = styled.img`
  width: 100px; /* Ajusta el ancho según sea necesario */
  height: auto; /* Mantiene la proporción de la imagen */
  border-radius: 10px; /* Bordes redondeados opcionales */
  margin-right: 20px; /* Espacio entre la imagen y el contenido del texto */
`;

//const TextContainer = styled.div`
 // flex: 1; /* Permite que el contenedor de texto ocupe el espacio restante */
//`;

const Button = styled.a`
  display: inline-block;
  margin: 5px; /* Espaciado entre los botones */
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    background-color: #0056b3;
  }
`;


function Project({ title, deployedUrl, githubUrl, imageUrl }: ProjectProps) {
  return (
    <Card>
      <Image src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <Button href={deployedUrl} target="_blank">Live Demo</Button>
      <Button href={githubUrl} target="_blank">GitHub</Button>
    </Card>
  );
}

export default Project;