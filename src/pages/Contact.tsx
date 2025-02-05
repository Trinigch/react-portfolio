import { useState } from 'react';
import styled from 'styled-components';
import avatarImage from './../assets/img/hero1.jpeg';

const Container = styled.div`
  width: 100%;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  overflow: hidden;
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


const FormContainer = styled.div`
  margin: 20px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #e6d7c5; /* Beige Claro */
  max-width: 800px;
  width: 100%;
`;

const InputContainer = styled.div`
  display: block;
  margin-top: 15px;
  color:var( --light-background);
  
   
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #b0b0b0; /* Gris Neutro */
  border-radius: 5px;
  font-size: 16px;

  &:focus {
  background: #000d15;
    border-color: #1f3a64; /* Azul Marino */
    outline: none;
    box-shadow: 0 0 5px rgba(31, 58, 100, 0.5);
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #b0b0b0;
  border-radius: 5px;
  font-size: 16px;
  resize: none;

  &:focus {
    border-color: #1f3a64;
    outline: none;
    box-shadow: 0 0 5px rgba(31, 58, 100, 0.5);
  }
`;

const StyledButton = styled.button`
  margin-top: 20px;
  padding: 12px;
  background-color: var(--light-accent); /* Rosa suave */
  color:  #E6D7C5; /* Blanco para el texto */
   border: 2px solid var(--light-accent);
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: var(--dark-accent); /* Azul Marino en hover */
    box-shadow: 0 0 5px rgba(31, 58, 100, 0.5); /* Agregar sombra para el hover */
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin: 5px 0 0;
`;

const Title = styled.h1`
  color: #1f3a64; /* Azul Marino */
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

interface Errors {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Errors>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'firstName') {
      setFirstName(value);
      setErrors((prev) => ({ ...prev, firstName: '' }));
    } else if (name === 'lastName') {
      setLastName(value);
      setErrors((prev) => ({ ...prev, lastName: '' }));
    } else if (name === 'email') {
      setEmail(value);
      setErrors((prev) => ({ ...prev, email: '' }));
    } else if (name === 'message') {
      setMessage(value);
      setErrors((prev) => ({ ...prev, message: '' }));
    }
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (!value) {
      setErrors((prev) => ({ ...prev, [name]: 'Este campo es obligatorio' }));
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setErrors((prev) => ({ ...prev, email: 'Ingrese un correo electrónico válido' }));
      }
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formIsValid = true;
    const newErrors: Errors = {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    };

    if (!firstName) {
      newErrors.firstName = 'Este campo es obligatorio';
      formIsValid = false;
    }
    if (!lastName) {
      newErrors.lastName = 'Este campo es obligatorio';
      formIsValid = false;
    }
    if (!email) {
      newErrors.email = 'Este campo es obligatorio';
      formIsValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = 'Ingrese un correo electrónico válido';
        formIsValid = false;
      }
    }
    if (!message) {
      newErrors.message = 'Este campo es obligatorio';
      formIsValid = false;
    }

    setErrors(newErrors);

    if (formIsValid) {
      alert(`Hola ${firstName} ${lastName}, tu mensaje ha sido enviado.`);
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <Container>
      <div className="min-h-screen w-screen flex items-center justify-center">
      <Avatar src={avatarImage} alt="Avatar" />
      <div className="min-h-screen w-screen flex items-center justify-center">
        <FormContainer>
          <Title>Contact Me</Title>
          <form onSubmit={handleFormSubmit}>
            <InputContainer>
              <StyledInput
                value={firstName}
                name="firstName"
                onChange={handleInputChange}
                onBlur={handleBlur}
                type="text"
                placeholder="First Name"
              />
              {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
            </InputContainer>
            <InputContainer>
              <StyledInput
                value={lastName}
                name="lastName"
                onChange={handleInputChange}
                onBlur={handleBlur}
                type="text"
                placeholder="Last Name"
              />
              {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
            </InputContainer>
            <InputContainer>
              <StyledInput
                value={email}
                name="email"
                onChange={handleInputChange}
                onBlur={handleBlur}
                type="email"
                placeholder="Email Address"
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </InputContainer>
            <InputContainer>
              <StyledTextarea
                value={message}
                name="message"
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder="Your Message"
                rows={4}
              />
              {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
            </InputContainer>
            <StyledButton type="submit">Send Message</StyledButton>
          </form>
        </FormContainer>
      </div>
      </div>
    </Container>
  );
}