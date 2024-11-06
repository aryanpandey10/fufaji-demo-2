// DownloadFive.js
import React from "react";
import { PDF_LIST } from "../../mocks/downloads";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faDownload } from "@fortawesome/free-solid-svg-icons";
import "./DownloadFive.css";

export const DownloadFive = () => {
  return (
    <section className="downloads-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div className="section-title-two text-center mb-50">
              <h2 className="title">Download Important Documents</h2>
              <p>Read or download our collection of essential resources.</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Document Title</th>
                  <th>Read</th>
                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
                {PDF_LIST.map((pdf) => (
                  <tr key={pdf.id}>
                    <td>{pdf.title}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          window.open(
                            pdf.pdfLink,
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                      >
                        <FontAwesomeIcon icon={faFilePdf} /> Read
                      </button>
                    </td>
                    <td>
                      <a
                        href={pdf.pdfLink.replace(
                          "/view",
                          "/export?format=pdf"
                        )}
                        className="btn btn-success"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        <FontAwesomeIcon icon={faDownload} /> Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
