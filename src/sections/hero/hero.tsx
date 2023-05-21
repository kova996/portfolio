import React from "react";
import Screen from "../../components/glb-model/GlbModel";

import "./hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="title">
          A Passion for Technology, Learning and Teamwork
        </h1>
        <p className="subtitle">
          {/*I am a software engineer with a passion for technology, a strong work
          ethic and a desire to continuously learn and grow. My ability to stay
          current with the latest advancements in my field has enabled me to
          excel in a variety of projects. Outside of work, I am a well-rounded
          individual who enjoys reading, listening to music, participating in
          sports, appreciating nature, and meeting new people. My diverse
          interests and positive attitude make me a great team player and an
          asset to any team I work with.*/}
          Passionate software engineer with a strong work ethic, committed to
          continuous learning and staying current in the field. A well-rounded,
          team player excelling in diverse projects and interests.
        </p>
        <button className="btn call-to-action">Wanna get in touch?</button>
      </div>
      <div className="hero-image">
        <Screen modelPath={"/model.glb"} />
      </div>
      <div className="curve">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
