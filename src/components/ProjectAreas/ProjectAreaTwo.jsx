import React from "react";
import { PROJECT_LIST_TWO } from "../../mocks/projects";
import { ProjectAreaTwoItem } from "./ProjectAreaTwoItem";

export const ProjectAreaTwo = () => {
  return (
    <section className="project-area-two project-bg-two">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6">
            <div className="section-title-two mb-40 tg-heading-subheading animation-style3">
              <span className="sub-title">Our Completed Work</span>
              <h2 className="title tg-element-title">
                Recently Completed <br />
                Consulting Projects
              </h2>
            </div>
          </div>
          <div className="col-lg-6 col-md-10">
            <div className="project-content-top">
              <p>
                Our team has successfully executed a range of business and
                financial consulting projects, delivering exceptional results
                for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container custom-container">
        <div className="row justify-content-center">
          {PROJECT_LIST_TWO.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6 col-sm-10">
              <ProjectAreaTwoItem project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
