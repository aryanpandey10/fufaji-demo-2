import React from "react";
import { VISAS_ONE_LIST } from "../../mocks/visas";
import { VisaOneItem } from "./VisaOneItem";

export const VisaFive = () => {
  const list = VISAS_ONE_LIST;

  return (
    <section className="services-area-five inner-services-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div className="section-title-two text-center mb-50">
              <h2 className="title">
                Spotlight some most important features we offer
              </h2>
              <p>
                Explore our range of migration services tailored to your needs.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {list.map((visa) => (
            <div key={visa.id} className="col-lg-6 col-md-6 col-sm-10">
              <VisaOneItem visa={visa} /> {/* Correct prop name here */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
