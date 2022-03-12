import React from "react";
import "./Card.css";
import About from "./About";
import Interests from "./Interests";

export default function Card() {
  return (
    <div className="Info">
      <img
        src="/images/Marla-image.jpg"
        alt="Marla"
        className="img-fluid image-Marla"
      />
      <h1>Marla Laystrom</h1>
      <p>Frontend Developer</p>
      <a
        href="mailto:marlalaystrom@gmail.com"
        class="btn btn-light Email"
        title="Contact Marla"
      >
        📧 Email
      </a>
      <a
        href="https://www.linkedin.com/in/marla-laystrom-33301b6"
        title="Linkedin Profile"
        target="_blank "
        rel="noreferrer"
        class="btn btn-primary"
      >
        Linkedin
      </a>

      <About />
      <Interests />
    </div>
  );
}
