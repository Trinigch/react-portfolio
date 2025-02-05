import styled from 'styled-components';
import backgroundImage from './../assets/img/sheep.png';
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
         @media screen and (max-width: 550px) {
        flex-direction: col;
  }
  
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
       @media (max-width: 550px) {
        top: 100px;
        left: 150px; 
  }
  `;
  const TextContainer = styled.div`
    flex: 1;
    padding: 60px;
    color: #1F3A64; /* Azul Marino */
    display: flex;
    flex-direction: column;
    justify-content: center;
      @media (max-width: 550px) {
       padding: 60px;
       top: 0px;
  }
  `;
  const Heading = styled.h1`
  font-size: 3rem; /* Aumenta el tamaño para mayor impacto */
  font-weight: bold;
  margin-bottom: 20px;
  color:var(--dark-accent);
  letter-spacing: 1.5px; /* Espaciado para mejor legibilidad */
   @media (max-width: 650px) {
    font-size: 2rem; /* Reduce el tamaño para pantallas pequeñas */
  }
      @media (max-width: 550px) {
       display:none; /* Reduce el tamaño para pantallas pequeñas */
  }
`;
const Paragraph = styled.p`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 2.5rem; /* Ajusta según sea necesario */
  color:var(--dark-accent);
  padding: 20px;
  line-height: 1.4;
  width: fit-content;
    @media (max-width: 650px) {
    font-size: 1.8rem; /* Reduce el tamaño para pantallas pequeñas */
  }
`
  return (
    <Container>
        <div className="min-h-screen w-screen flex items-center justify-center">
      <ImageContainer />
      <Avatar src={avatarImage} alt="Avatar" />
      <TextContainer>
        <Heading>Hey, I'm Maria!</Heading>
        <Paragraph>Hi there! I'm Maria Renata, a Full Stack Developer passionate about building seamless digital experiences, working remotely in Minnesota.</Paragraph>
      </TextContainer>
      </div>
    </Container>
  );
}
export default AboutMe;