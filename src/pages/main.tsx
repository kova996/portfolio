import Education from "../sections/education/Education";
import WorkExperience from "../sections/work-experience/WorkExperience";
import Hero from "../sections/hero/hero";
import Projects from "../sections/projects/Projects";

export const Main = () => {
  return (
    <div className={`main-container`}>
      <Hero />
      <Education />
      <WorkExperience />
      <Projects />
      {/*       https://mui.com/material-ui/react-timeline/
                https://primereact.org/timeline/
            <Skills />
            <Certifications />
            */}
    </div>
  );
};
