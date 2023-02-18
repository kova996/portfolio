import Education from "../sections/education/Education";
import WorkExperience from "../sections/work-experience/WorkExperience";
import Hero from "../sections/hero/hero";

export const Main = () => {
  return (
    <div className={`main-container`}>
      <Hero />
      <Education />
      <WorkExperience />
      {/*       https://mui.com/material-ui/react-timeline/
                https://primereact.org/timeline/
            <Skills />
            <Certifications />
            */}
    </div>
  );
};
