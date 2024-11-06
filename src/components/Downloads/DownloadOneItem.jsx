import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faDownload } from "@fortawesome/free-solid-svg-icons";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "./DownloadOneItem.css";

export const DownloadOneItem = ({ pdf }) => {
  const [previewSrc, setPreviewSrc] = useState(null);

  useEffect(() => {
    // Check if there's a preview image link available
    // For simplicity, this example assumes `pdf.thumbnail` holds the preview image URL if available.
    if (pdf.thumbnail) {
      setPreviewSrc(pdf.thumbnail);
    }
  }, [pdf.thumbnail]);

  const openPDFInNewTab = () => {
    window.open(pdf.pdfLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="download-item">
      <div className="download-content">
        <h2 className="title">{pdf.title}</h2>

        <div className="download-thumb">
          {previewSrc ? (
            <img src={previewSrc} alt={`${pdf.title} preview`} />
          ) : (
            <p>No preview available</p>
          )}
        </div>

        <div className="btn-group">
          <button className="btn" onClick={openPDFInNewTab}>
            <FontAwesomeIcon icon={faFilePdf} /> Read
          </button>
          <a
            href={pdf.pdfLink.replace("/view", "/export?format=pdf")}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <FontAwesomeIcon icon={faDownload} /> Download
          </a>
        </div>
      </div>
    </div>
  );
};
