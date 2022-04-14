import React from "react";
import "./Card.css";
import About from "./About";

import Footer from "./Footer";
import "./Footer.css";

export default function Card() {
  return (
    <div className="Info">
      <img
        src="/images/Marla-image.jpg"
        alt="Marla"
        className="img-fluid image-Marla"
      />
      <h1>Marla Laystrom</h1>
      <p className="text-center">Frontend Developer</p>
      <div class="d-grid gap-2 col-6 mx-auto">
        <a
          href="mailto:marlalaystrom@gmail.com"
          class="btn btn-light Email"
          title="Contact Marla"
        >
          <i class="far fa-envelope"></i> Email
        </a>
      </div>

      <About />

      <div className="Container">
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
