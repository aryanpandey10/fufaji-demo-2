import React from "react";
import { SERVICES_ONE_LIST } from "../../mocks/services";
import { ServiceOneItem } from "./ServiceOneItem";

export const ServiceFive = () => {
  const list = SERVICES_ONE_LIST; // Use the updated list here

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
          {list.map((service) => (
            <div key={service.id} className="col-lg-4 col-md-6 col-sm-10">
              <ServiceOneItem service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
