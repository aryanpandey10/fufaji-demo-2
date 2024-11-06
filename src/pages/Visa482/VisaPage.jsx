import React from "react";
import { Layout } from "../../layouts/Layout";
import { VisaFive } from "../../components/Visa/VisaFive";

const VisaPage = () => {
  return (
    <Layout breadcrumb={"Visas"} title={"Our Visas"}>
      {/* services */}
      <VisaFive />
    </Layout>
  );
};

export default VisaPage;
