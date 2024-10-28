import { useState } from 'react';
import styled from 'styled-components';
const Container = styled.div`
  width: 100%; /* Asegura que el contenedor ocupe todo el ancho */
  margin: auto; /* Centra el contenedor */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  overflow: hidden;
`;
const FormContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  max-width: 800px;
  width: 100%;
`;

const InputContainer = styled.div`
  display: block;
  margin-top: 10px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    border-color: teal;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 128, 128, 0.5);
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  resize: none;

  &:focus {
    border-color: teal;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 128, 128, 0.5);
  }
`;

const StyledButton = styled.button`
  margin-top: 15px;
  padding: 12px;
  background-color: teal;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: darkcyan;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin: 5px 0 0;
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
      <FormContainer>
        <h1 className="text-4xl font-bold text-center">Contact Us</h1>
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
          <StyledButton type="submit">Submit</StyledButton>
        </form>
      </FormContainer>
    </div>
    </Container>
  );
}