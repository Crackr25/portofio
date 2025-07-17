import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Izakahr Echem</span> from
            <span className="purple"> Bukidnon, Philippines</span>.
            <br />
            I'm a passionate Full-Stack Web Developer with a strong focus on PHP and Laravel.
            <br />
            I graduated <i>**Cum Laude**</i> with a degree in Information Technology from the
            University of Science and Technology of Southern Philippines (USTP).
            <br />
            I enjoy building clean, efficient, and scalable web applications that solve real-world problems.
            <br />
            <br />
            Outside of development, I also enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing video games
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and exploring new places
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Izakahr Echem</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
