import { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

// Styled components
const Container = styled.div`
  width: 100%;
  margin: auto;
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

// const StyledTextarea = styled.textarea`
//   width: 100%;
//   padding: 12px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   font-size: 16px;
//   resize: none;

//   &:focus {
//     border-color: teal;
//     outline: none;
//     box-shadow: 0 0 5px rgba(0, 128, 128, 0.5);
//   }
// `;

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

// Validation messages
const ERROR_MESSAGES = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
};

// Component
export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const validateField = (name: string, value: string) => {
    if (!value) {
      return ERROR_MESSAGES.required;
    }
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return ERROR_MESSAGES.email;
      }
    }
    return '';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = Object.keys(formData).reduce((acc, field) => {
      // Aseguramos que field es una clave válida de formData
      if (field in acc) {
        acc[field as keyof typeof formData] = validateField(field, formData[field as keyof typeof formData]);
      }
      return acc;
    }, {} as { [key in keyof typeof formData]: string });

    setErrors(newErrors);

    const formIsValid = !Object.values(newErrors).some((error) => error);

    if (formIsValid) {
      try {
        const { firstName, lastName, email, message } = formData;

        // Replace with your EmailJS credentials
        const SERVICE_ID = 'service_9nyzw93';
        const TEMPLATE_ID = 'template_3alafqd';
        const USER_ID = 'jFodaExO7SRQKsoqG';

        await emailjs.send(SERVICE_ID, TEMPLATE_ID, { firstName, lastName, email, message }, USER_ID);

        alert(`Thank you, ${firstName} ${lastName}. Your message has been sent successfully.`);
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      } catch (error) {
        console.error('Error sending email:', error);
        alert('An error occurred while sending your message. Please try again later.');
      }
    }
  };

  return (
    <Container>
      <div className="min-h-screen w-screen flex items-center justify-center">
        <FormContainer>
          <h1 className="text-4xl font-bold text-center">Contact Us</h1>
          <form onSubmit={handleFormSubmit}>
            {['firstName', 'lastName', 'email', 'message'].map((field) => (
              <InputContainer key={field}>
                <StyledInput
                  value={formData[field as keyof typeof formData]}
                  name={field}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  type={field === 'email' ? 'email' : 'text'}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                />
                {errors[field as keyof typeof errors] && <ErrorMessage>{errors[field as keyof typeof errors]}</ErrorMessage>}
              </InputContainer>
            ))}
            <StyledButton type="submit">Send</StyledButton>
          </form>
        </FormContainer>
      </div>
    </Container>
  );
}