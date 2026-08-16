import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const SERVICE_ID = "service_9nyzw93";
const TEMPLATE_ID = "template_3alafqd";
const USER_ID = "jFodaExO7SRQKsoqG";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface Errors {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const initialErrors: Errors = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Errors>(initialErrors);
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [sendError, setSendError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSuccessMessage("");
    setSendError("");
  };

  const validateField = (name: string, value: string): string => {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      return "This field is required.";
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(trimmedValue)) {
        return "Please enter a valid email address.";
      }
    }

    return "";
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Errors = {
      firstName: validateField("firstName", formData.firstName),
      lastName: validateField("lastName", formData.lastName),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };

    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setSuccessMessage("");
    setSendError("");

    if (!validateForm()) {
      return;
    }

    setIsSending(true);

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        USER_ID
      );

      setSuccessMessage(
        `Thank you, ${formData.firstName}! Your message has been sent successfully.`
      );

      setFormData(initialFormData);
      setErrors(initialErrors);
    } catch (error) {
      console.error("Error sending message:", error);

      setSendError(
        "There was a problem sending your message. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-container">

        <div className="contact-intro">
          <span className="contact-eyebrow">GET IN TOUCH</span>

          <h1>Contact Me</h1>

          <p>
            Have a question, project idea, or opportunity?
            Feel free to get in touch. I would be happy to hear from you.
          </p>
        </div>

        <form
          className="contact-form"
          onSubmit={handleFormSubmit}
          noValidate
        >

          <div className="form-row">

            <div className="form-field">
              <label htmlFor="firstName">
                First Name
              </label>

              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder="First Name"
                className={errors.firstName ? "input-error" : ""}
              />

              {errors.firstName && (
                <span className="field-error">
                  {errors.firstName}
                </span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="lastName">
                Last Name
              </label>

              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder="Last Name"
                className={errors.lastName ? "input-error" : ""}
              />

              {errors.lastName && (
                <span className="field-error">
                  {errors.lastName}
                </span>
              )}
            </div>

          </div>

          <div className="form-field">
            <label htmlFor="email">
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="you@example.com"
              className={errors.email ? "input-error" : ""}
            />

            {errors.email && (
              <span className="field-error">
                {errors.email}
              </span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="Tell me a little about your project or question..."
              rows={6}
              className={errors.message ? "input-error" : ""}
            />

            {errors.message && (
              <span className="field-error">
                {errors.message}
              </span>
            )}
          </div>

          {successMessage && (
            <div className="form-success">
              {successMessage}
            </div>
          )}

          {sendError && (
            <div className="form-send-error">
              {sendError}
            </div>
          )}

          <button
            type="submit"
            className="contact-submit"
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>

        </form>

      </section>
    </main>
  );
};

export default Contact;