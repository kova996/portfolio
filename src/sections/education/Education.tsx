import React from "react";

import "react-vertical-timeline-component/style.min.css";
import Timeline from "../../components/timeline/Timeline";

import "./Education.css";

const Education: React.FC = () => {
  const educationList = [
    {
      name: "Highschool Diploma",
      location: "General Gymnasium, Livno",
      details: "something else",
      time: "1.9.2011. - 1.7.2015.",
    },
    {
      name: "Bachelor's Degree",
      location: "Faculty of Science, Split",
      details: "something else",
      time: "1.10.2015. - 24.9.2018.",
    },
    {
      name: "Master's Degree",
      location: "Faculty of Science, Split",
      details: "something else",
      time: "1.10.2018. - 24.9.2020.",
    },
    {
      name: "UX Design Certificate",
      location: "University College Algebra",
      details: "something else",
      time: "22.2.2022. - CURRENT",
    },
  ];

  return (
    <section className="education">
      <div className="education-title">
        <h1 className="">Education and Training</h1>
      </div>
      <p className="education-summary">
        Not the whole source of current knowledge but definitely the big
        influence on work etics and passion for growth.
      </p>
      <div className="education-info">
        <Timeline elements={educationList} />
      </div>
    </section>
  );
};

export default Education;
