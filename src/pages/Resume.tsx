import "./Resume.css";

const Resume = () => {
  return (
    <main className="resume-page">
      <div className="resume-container">
        <header className="resume-header">
          <h1>Resume</h1>
          <p>Full Stack Web Developer | Electronic Engineer</p>
        </header>

        <section className="resume-section">
          <h2>Professional Summary</h2>
          <p>
            Accomplished Full Stack Web Developer with a background in Electronic
            Engineering and a strong passion for software development. With 3 years
            of experience, I specialize in building scalable full-stack applications
            using TypeScript, Node.js, React, and AWS. Proficient in cloud computing,
            API development, and database management. Adept at working in agile teams,
            problem-solving, and optimizing user experiences. Eager to contribute my
            skills in fintech and financial wellness solutions.
          </p>
        </section>

        <section className="resume-section">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <div><strong>Languages:</strong> JavaScript, TypeScript, HTML, CSS, SQL, NoSQL, C#, PHP</div>
            <div><strong>Frontend:</strong> React.js, Next.js, Tailwind CSS, jQuery, Bootstrap, Progressive Web Apps</div>
            <div><strong>Backend:</strong> Node.js, Express.js, RESTful APIs, GraphQL (Apollo Server/Client), .NET (C#)</div>
            <div><strong>Databases:</strong> PostgreSQL, MongoDB, Sequelize, SQLite</div>
            <div><strong>Cloud & Deployment:</strong> AWS, Render, Firebase, Azure</div>
            <div><strong>DevOps & Tools:</strong> Docker, Git, GitHub, CI/CD Pipelines, GitHub Actions</div>
            <div><strong>Testing:</strong> Jest, Mocha</div>
            <div><strong>Development Practices:</strong> Agile, API design, performance optimization, scalability, security best practices</div>
          </div>
        </section>

        <section className="resume-section">
          <h2>Relevant Work Experience</h2>

          <article className="resume-item">
            <div className="resume-item-heading">
              <h3>Epidata</h3>
              <span>Jul 2021 – Feb 2024</span>
            </div>
            <h4>Full Stack Developer | Client: Galeno – Healthcare/Healthtech</h4>
            <p className="location">Buenos Aires, Argentina</p>
            <ul>
              <li>
                Developed and maintained scalable web and mobile applications using
                Next.js, Node.js, and React Native, enhancing the digital experience
                for healthcare users.
              </li>
              <li>
                Collaborated within an agile team (Scrum) to deploy cloud-native
                solutions on AWS, Azure, and Render, significantly reducing system
                bugs and improving codebase maintainability.
              </li>
              <li>
                Designed dynamic UI components and implemented responsive design
                strategies, ensuring pixel-perfect rendering across diverse mobile
                and desktop screen sizes.
              </li>
              <li>
                Resolved critical API integration and data synchronization bugs,
                ensuring accurate and seamless real-time data transmission between
                backend systems and front-end interfaces.
              </li>
            </ul>
          </article>

          <article className="resume-item">
            <div className="resume-item-heading">
              <h3>Conuar</h3>
              <span>January 2018 – Jul 2021</span>
            </div>
            <h4>Deep Learning & Computer Vision Engineer (R&D)</h4>
            <ul>
              <li>
                Developed an end-to-end defect detection framework for uranium
                pellets using Deep Learning methods to replace manual quality control.
              </li>
              <li>
                Implemented Convolutional Autoencoders in Google Colab to learn
                features of defect-free pellets and classify anomalies based on
                reconstruction error metrics.
              </li>
              <li>
                Built embedded vision applications using OpenCV and Python on
                Raspberry Pi 3, achieving automated, high-precision surface inspections.
              </li>
              <li>
                Modernized PLC/Automation systems for critical industrial machinery
                including Graphite Furnace, Beryllium Metallizer, and LPA tray transport.
              </li>
              <li>
                Handled stakeholder communication, budget estimation with equipment
                providers, and drafted rigorous technical compliance documentation.
              </li>
            </ul>
          </article>
        </section>

        <section className="resume-section">
          <h2>Projects</h2>

          <article className="resume-item project-item">
            <h3>jeremiahandtriniwedding</h3>
            <p>
              Responsive wedding website developed to share event information, RSVP
              details, photo gallery, location, and personalized content for guests.
              Implemented dynamic frontend components, responsive UI design, and
              interactive user experience features.
            </p>
            <p>
              Built and customized the frontend using React, integrating responsive
              layouts and reusable components to provide a smooth experience across
              desktop and mobile devices.
            </p>
            <p><strong>Tools/Languages:</strong> React, JavaScript, HTML, CSS, Node.js.</p>
            <a
              href="https://jeremiahandtriniwedding.onrender.com/about-wedding/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </article>

          <article className="resume-item project-item">
            <h3>Farm Tracker</h3>
            <p>
              Responsive and dynamic web platform designed for managing, visualizing,
              and disseminating information related to agricultural activities and farms.
              Implemented interactive frontend components, an adaptive user interface
              design, and optimized features to enhance the user experience across
              both rural and urban environments.
            </p>
            <p>
              Built and customized the frontend using React, integrating reusable
              components and fluid layouts to ensure seamless performance on desktop
              and mobile devices.
            </p>
            <p><strong>Tools/Languages:</strong> React, JavaScript, HTML, CSS, Node.js.</p>
            <a
              href="https://farm-9og5.onrender.com/aboutFarm"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </article>

          <article className="resume-item project-item">
            <h3>Veteran Valor Farm</h3>

            <p>
              Responsive nonprofit website developed for Veteran Valor Farm, an
              organization supporting veterans through agriculture, community,
              and skill development. The website provides information about the
              organization's mission, programs, application process, and ways to
              support the organization.
            </p>

            <p>
              Designed and developed the frontend using React and TypeScript,
              implementing reusable navigation and layout components, responsive
              design, image-based sections, interactive navigation states, and
              mobile-friendly layouts. The website was deployed to Netlify and
              connected to the organization's custom domain.
            </p>

            <p>
              <strong>Tools/Languages:</strong> React, TypeScript, JavaScript, HTML,
              CSS, Vite, React Router, Netlify.
            </p>

            <a
              href="https://veteranvalorfarm.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </article>
        </section>

        <section className="resume-section">
          <h2>Education</h2>

          <article className="resume-item">
            <div className="resume-item-heading">
              <h3>Boot Camp Certificate</h3>
              <span>December 2024</span>
            </div>
            <h4>University of Minnesota, Minneapolis, MN</h4>
            <p>
              A 12-week intensive program focused on developing technical programming
              skills in HTML, CSS, Git, JavaScript, Bootstrap, the DOM, APIs, jQuery,
              JSON, and AJAX. It emphasizes team collaboration, agile development,
              and project demonstration and storytelling. Expertise in Node.js, ES6,
              object-oriented programming, Express.js, SQL, the MVC paradigm,
              Sequelize, testing, Progressive Web Apps, React, NoSQL, the MERN stack,
              and computer science.
            </p>
          </article>

          <article className="resume-item">
            <div className="resume-item-heading">
              <h3>Deep Learning Diploma Certificate</h3>
              <span>December 2019</span>
            </div>
            <h4>Technological Institute of Buenos Aires (ITBA), Buenos Aires, Argentina</h4>
            <p>
              A 109-hour program focused on Python programming, data analysis, and
              machine learning, including pandas, matplotlib, numpy, and Jupyter for
              data manipulation and visualization. Covered linear algebra, probability,
              statistics, regression, Naive Bayes, neural networks using Keras and
              PyTorch, MNIST and Fashion-MNIST, CNNs, RNNs, transfer learning,
              hyperparameter tuning, and model optimization.
            </p>
          </article>

          <article className="resume-item">
            <div className="resume-item-heading">
              <h3>Master’s Degree in Electronic Engineering</h3>
              <span>December 2016</span>
            </div>
            <h4>University of Buenos Aires, Buenos Aires, Argentina</h4>
          </article>
        </section>
      </div>
    </main>
  );
};

export default Resume;