
import styled from 'styled-components';
import backgroundImage from './../assets/img/landscape.jpeg';
import avatarImage from './../assets/img/hero1.jpeg';
  /* min-height: 80vh;  Asegura que ocupe toda la altura de la pantalla */
function AboutMe() {

const Container = styled.div`
  width: 100%; /* Asegura que el contenedor ocupe todo el ancho */

  margin: auto; /* Centra el contenedor */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  flex: 1;
  background-image: url(${backgroundImage});
  background-position: center left;
  background-size: cover;
  min-height: 20vh; /* Asegura que la imagen tenga una altura mínima */
`;
const Avatar = styled.img`
position: absolute; /* Permite que el avatar flote sobre el contenedor */
top: 100px; /* Ajusta la posición vertical */
left: 20px; /* Ajusta la posición horizontal */
width: 80px; /* Ajusta el tamaño del avatar */
height: 80px; /* Ajusta el tamaño del avatar */
border-radius: 50%; /* Hace que la imagen del avatar sea redonda */
border: 2px solid white; /* Borde blanco para el avatar */
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 40px; /* Ajustar padding para el texto */
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Alinea verticalmente el contenido */
 
`;

const Paragraph = styled.p`
  font-size: 1.2rem; /* Aumenta el tamaño de la fuente */
  margin-bottom: 16px; /* Agrega espacio entre los párrafos */
`;


  return (  <Container>
  <div className="min-h-screen w-screen flex items-center justify-center">
  <h1 className="text-4xl font-bold">About Me</h1>
  <Avatar src={avatarImage} alt="Avatar" /> {/* Agrega el avatar */}
    <p className="mt-4 text-lg">
    <TextContainer>
    <Paragraph>   
        My name is Maria Renata. I'm familiar with technologies like Javascript, Node.js, React, Firebase, Express, MySQL, MongoDB, HTML, and CSS.
      </Paragraph>
      <Paragraph> 
        I graduated from the University of Buenos Aires with a master's degree in Electronic Engineering.
      </Paragraph>
      <Paragraph> 
        I moved to Brainerd, MN, where I live on a farm with chickens, sheep, and more.
      </Paragraph>
      </TextContainer>
      <ImageContainer /> 
    </p>
  </div>
    </Container>
    )
}
export default AboutMe;


/*/*
 <TextContainer>
        <h1 className="text-4xl font-bold">About Me</h1>
          
          <Paragraph>   
            My name is Maria Renata. I'm familiar with technologies like Javascript, Node.js, React, Firebase, Express, MySQL, MongoDB, HTML, and CSS.
          </Paragraph>
          <Paragraph> 
            I graduated from the University of Buenos Aires with a master's degree in Electronic Engineering.
          </Paragraph>
          <Paragraph> 
            I moved to Brainerd, MN, where I live on a farm with chickens, dairy sheep, and more.
          </Paragraph>
        </TextContainer>*/