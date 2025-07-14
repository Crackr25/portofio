import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sms from "../../Assets/Projects/sms.png";
import hims from "../../Assets/Projects/hims.png";
import eva from "../../Assets/Projects/eva.png";
import tutor from "../../Assets/Projects/tutor.png";
import emotion from "../../Assets/Projects/emotion.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sms}
              isBlog={false}
              title="School Management System"
              description="A school management system which allows users to view the marks of their students. Also it allows the admin to add or remove students from the database. It also allows the students to see the marks of their respective classes. It uses React.js, Node.js, Express.js and MongoDB as backend database"
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Accounting System"
              description="A simple accounting system for managing income and expenses. Allows the user to add new income/expense, edit and delete existing ones. Uses React.js, Node.js, Express.js and MongoDB as backend database"
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hims}
              isBlog={false}
              title="Health Information Management System"
              description="A Health Information Management System which allows users to view the health records of patients. It allows the admin to add or remove patients from the database. It also allows the patients to see their health records. It uses React.js, Node.js, Express.js and MongoDB as backend database"
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hims}
              isBlog={false}
              title="Learning Management System"
              description="A Learning Management System which allows users to view the courses available. It allows the admin to add or remove courses from the database. It also allows the users to see the courses they have enrolled in. It uses React.js, Node.js, Express.js and MongoDB as backend database"
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tutor}
              isBlog={false}
              title="Tutor Finding System"
              description="A tutor finding system which uses natural language processing to find the best tutor for a user based on their requirements. It was created for an international client and uses modern frameworks such as Laravel, graphQL and MongoDB as backend database"
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eva}
              isBlog={false}
              title="Everthing for Art"
              description="An app that allows users to share their digital arts. It uses React.js, Node.js, Express.js and MongoDB as backend database"

              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
