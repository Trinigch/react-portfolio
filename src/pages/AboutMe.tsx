import styled from 'styled-components';
import backgroundImage from './../assets/img/landscape.jpeg';
import avatarImage from './../assets/img/hero1.jpeg';

function AboutMe() {

  const Container = styled.div`
    width: 100%;
    margin: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    overflow: hidden;
    position: relative; /* Permite posicionar el avatar correctamente */
  
  `;

  const ImageContainer = styled.div`
    flex: 1;
    background-image: url(${backgroundImage});
    background-position: center left;
    background-size: cover;
    min-height: 80vh; /* Asegura que la imagen cubra la pantalla */
    margin: 20px;
    padding: 20px;
    border-radius: 10px 10px 30px 5px;
     @media screen and (max-width: 768px) {
    display: none;
  }


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

  const TextContainer = styled.div`
    flex: 1;
    padding: 60px;
    color: #1F3A64; /* Azul Marino */
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  // const Paragraph = styled.p`
  //   font-size: 2.5rem;
  //   margin-bottom: 32px;
  //   color: #213547; /* Gris oscuro para mejor legibilidad */
  // `;

  // const Heading = styled.h1`
  //   font-size: 2.5rem;
  //   font-weight: bold;
  //   margin-bottom: 20px;
  //   color: #1F3A64; /* Azul Marino */
   
  // `;
  const Heading = styled.h1`
  font-size: 3rem; /* Aumenta el tamaño para mayor impacto */
  font-weight: bold;
  margin-bottom: 20px;
  color: #1F3A64; /* Azul Marino */
  letter-spacing: 1.5px; /* Espaciado para mejor legibilidad */
`;

const Paragraph = styled.p`
  font-size: 1.5rem; /* Reduce el tamaño para facilitar la lectura */
  line-height: 1.8; /* Aumenta el interlineado para mejor espaciado */
  margin-bottom: 24px;
  color: #213547; /* Gris oscuro para contraste */
  text-align: justify; /* Justifica el texto para un look más profesional */
  max-width: 800px; /* Limita el ancho del texto para mejorar la legibilidad */
`;
  return (
    <Container>
        <div className="min-h-screen w-screen flex items-center justify-center">
      <ImageContainer />
      <Avatar src={avatarImage} alt="Avatar" />
      <TextContainer>
        <Heading>About Me</Heading>
        <Paragraph>My name is Maria Renata.I graduated in December 2024 from the UNIVERSITY OF MINNESOTA College of Continuing & Professional Studies with an A grade. I am proficient in technologies such as JavaScript, Node.js, React, Firebase, Express, MySQL, MongoDB, HTML, and CSS.</Paragraph>
        <Paragraph>In 2016, I completed my master's degree in Electronic Engineering from the University of Buenos Aires.</Paragraph>
        <Paragraph>I currently reside in Minnesota, where I live on a farm with goats and sheeps</Paragraph>
      </TextContainer>
      </div>
    </Container>
  );
}

export default AboutMe;