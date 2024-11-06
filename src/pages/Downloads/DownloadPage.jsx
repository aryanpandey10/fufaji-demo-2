import React from "react";
import { Layout } from "../../layouts/Layout";
import { DownloadFive } from "../../components/Downloads/DownloadFive";

const DownloadPage = () => {
  return (
    <Layout breadcrumb={"Downloads"} title={"Our Documents"}>
      {/* services */}
      <DownloadFive />
    </Layout>
  );
};

export default DownloadPage;
