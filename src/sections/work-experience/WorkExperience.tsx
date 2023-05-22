import React from "react";
import Timeline from "../../components/timeline/Timeline";

import "./WorkExperience.css";

const WorkExperience: React.FC = () => {
  const experienceList = [
    {
      name: "Student Practice",
      location: "Siemens Convergence Creators",
      details: "Building hybrid mobile application. Technologies used: Ionic",
      time: "6.12.2017. - 18.6.2018.",
    },
    {
      name: "Assistant in Development of Humanoid Entertainment Robot",
      location: "Darko Strojevi",
      details:
        "Programming interface for communication with humanoid entertainment robot with hybrid mobile app using Raspberry Pi, Node.js, Python and Ionic.",
      time: "6.3.2018. - 3.8.2018.",
    },
    {
      name: "Web Developer",
      location: "Faculty of Science, Split",
      details:
        "Implementation for storing learning progress on platform for teaching programming concepts. Technologies used: Javascript, HTML, CSS",
      time: "19.3.2018. - 27.6.2018.",
    },
    {
      name: "Student Intern",
      location: "Atos Convergence Creators",
      details:
        "Doing some minor Machine Learning projects and AI research. Technologies used: Python, Tensorflow, Scikit & Plain Javascript, HTML, CSS",
      time: "6.3.2019. - 15.7.2020.",
    },
    {
      name: "Software Engineer",
      location: "Atos Convergence Creators",
      details:
        "Implementation of internal AI-based projects and research. Implementation of Angular apps for internal use and integration with Cumulocity IoT solutions. Technologies used: Python, Flask, Node.js, .NET/.NET Core, Angular",
      time: "19.9.2020. - 1.3.2022.",
    },
    {
      name: "Freelance Software developer",
      location: "Devla GmbH",
      details:
        "Making Wordpress sites according to given design and Implementation of some CRUD admin app. Technologies used: Wordpress, HTML, CSS, Javascript, Next.js",
      time: "1.9.2021. - 1.12.2021.",
    },
    {
      name: "Assistaint Lecturer",
      location: "Faculty of Science, Split",
      details:
        "Lecturing about basic concepts inside AI and Machine learning in general. Giving an overview of basic AI algorithms with some practical examples and exercises. Subject: Machine Learning",
      time: "1.10.2020. - 1.3.2022.",
    },
    {
      name: "Software Engineer",
      location: "Code Vibe d.o.o",
      details: `Working on the Autoscout24 platform primarily focused on selling
vehicles.
• Implementation of service related to exporting articles to other big
and small platforms (like mobile.de) with an administration page
• Implementation of service for sending Leads to dealers, and the
other way around.
• Implementation of service for filtering emails based on a set of
heuristic rules and ML model(Naive Bayes Classifier) with some
UX/UI designing and development on the administration page
• Adjustments on ui fragments
Technologies:
• Frontend
• React
• Standard Plain Web Technologies
• Typescript
• Backend
• Java - Spring Boot
• Scala 2 - Play Framework
• Other
• AWS services
• CDK for creating application stacks
• SQS
• SNS
• Secrets Manager
• RDS
• Datadog monitoring
• Opsgenie alarming`,
      time: "1.3.2022. - CURRENT",
    },
  ];

  return (
    <section className="work-experience">
      <div className="work-experience-title">
        <h1 className="">Work Experience</h1>
      </div>
      <p className="work-experience-summary">
        Not the whole source of current knowledge but definitely the big
        influence on work etics and passion for growth.
      </p>

      <div className="work-experience-info">
        <Timeline elements={experienceList} />
      </div>
    </section>
  );
};

export default WorkExperience;
