import React from "react";
import Timeline from "../../components/timeline/Timeline";

import './WorkExperience.css';

const WorkExperience: React.FC = () => {
    return (
        <section className="work-experience">
            <div className="work-experience-title">
                <h1 className="">Work Experience</h1>
            </div>
            <p className="work-experience-summary">Not the whole source of current knowledge but definitely the big influence on work etics and passion for growth.</p>

            <div className="work-experience-info">
                <Timeline elements={["nono","hehe","hihi","haha"]}/>
            </div>
        </section>
    )
}

export default WorkExperience;