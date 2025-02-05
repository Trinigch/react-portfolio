import styled from 'styled-components';

interface ProjectProps {
  title: string;
  deployedUrl: string;
  githubUrl: string;
  imageUrl: string;
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #B0B0B0;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  background-color: #E6D7C5;
  max-width: 400px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const Title = styled.h3`
  color: #1F3A64;
  font-size: 1.5rem;
  margin-bottom: 10px;
  text-align: center;
`;

const Button = styled.a`
  display: inline-block;
  margin: 10px;
  padding: 12px 24px;
  background-color: #D9A7B5;
  color: #1F3A64;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  border: 1px solid #B0B0B0;
  transition: all 0.3s;

  &:hover {
    background-color: #E6D7C5;
    color: #1F3A64;
  }
`;

function Project({ title, deployedUrl, githubUrl, imageUrl }: ProjectProps) {
  return (
    <Card>
      <Image src={imageUrl} alt={title} />
      <Title>{title}</Title>
      <Button href={deployedUrl} target="_blank">Live Demo</Button>
      <Button href={githubUrl} target="_blank">GitHub</Button>
    </Card>
  );
}

export default Project;