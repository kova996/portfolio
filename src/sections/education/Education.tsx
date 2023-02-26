import React from "react";

import "react-vertical-timeline-component/style.min.css";
import Timeline from "../../components/timeline/Timeline";

import "./Education.css";

const Education: React.FC = () => {
  return (
    <section className="education">
      <div className="education-title">
        <h1 className="">Education</h1>
      </div>
      <p className="education-summary">
        Not the whole source of current knowledge but definitely the big
        influence on work etics and passion for growth.
      </p>
      <div className="education-info">
        <Timeline elements={["nono", "hehe", "hihi", "haha"]} />
      </div>
    </section>
  );
};

export default Education;
