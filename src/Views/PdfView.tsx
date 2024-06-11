import React, { useEffect, useState } from 'react';
import { ExampleDocument } from '../data/FileExample';

const base64ToBlob = (base64: string, contentType = 'application/pdf', sliceSize = 512) => {
  const byteCharacters = atob(base64);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  return new Blob(byteArrays, { type: contentType });
};


const PdfView: React.FC = () => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    const blob = base64ToBlob(ExampleDocument);
    const url = URL.createObjectURL(blob);
    setPdfUrl(url);

    return () => {
      URL.revokeObjectURL(url); // Cleanup the URL when the component unmounts
    };
  }, []);

  return (
    <div className="absolute w-[100%] h-[100%]">
      {pdfUrl && (
        <object data={pdfUrl} type="application/pdf" width="100%" height="100%">
          <p>Your browser does not support PDFs. <a href={pdfUrl}>Download the PDF</a>.</p>
        </object>
      )}
    </div>
  );
};

export default PdfView;
