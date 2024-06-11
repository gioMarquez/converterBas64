import React, { useState } from 'react';

const FileToBase64Converter: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [base64, setBase64] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const convertToBase64 = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      setBase64(result.split(',')[1]);
    };
    reader.onerror = (error) => {
      console.error('Error converting file to base 64:', error);
    };
  };

  const handleConvert = () => {
    if (file) {
      convertToBase64(file);
    }
  };

  const handleOpenInNewTab = () => {
    if (base64 && file) {
      const fileUrl = `data:application/octet-stream;base64,${base64}`;
      window.open(fileUrl, '_blank');
    }
  };

  return (
    <div className="p-5 space-y-5">
      <label
        htmlFor="fileInput"
        className="flex items-center cursor-pointer py-2 px-3 text-sm font-medium text-gray-700 rounded-md border border-gray-300 hover:bg-gray-100"
      >
        <svg
          className="mr-2 w-4 h-4 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0zM5 17h14a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2z"></path>
        </svg>
        <span>Seleccionar archivo</span>
        <input
          id="fileInput"
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>
      <button onClick={handleConvert} className="bg-blue-300 px-6 rounded-lg py-1">
        Convertir a Base64
      </button>
      {base64 && (
        <div>
          <h3>Salida Base 64</h3>
          <textarea
            className="bg-red-500 text-white w-full h-[300px] rounded-md"
            value={base64}
            readOnly
          ></textarea>
          <button onClick={handleOpenInNewTab} className="bg-green-300 px-6 rounded-lg py-1 mt-2">
            Ver más información
          </button>
        </div>
      )}
    </div>
  );
};

export default FileToBase64Converter;
