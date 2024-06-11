import React, { useState } from 'react';

const Base64ToFileRestorer: React.FC = () => {
  const [base64, setBase64] = useState<string>('');
  const [fileName, setFileName] = useState<string>('restored_file');

  const handleBase64Change = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBase64(event.target.value);
  };

  const handleFileNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(event.target.value);
  };

  const restoreFile = () => {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/octet-stream' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  };

  return (
    <div className='grid grid-cols-1'>
      <textarea
        value={base64}
        onChange={handleBase64Change}
        placeholder="Paste base64 here"
        rows={10}
        cols={50}
        className='text-xl border border-gray-300 rounded-md p-2'
      />
      <div className='grid grid-cols-2'>
        <input
          type="text"
          value={fileName}
          onChange={handleFileNameChange}
          placeholder="Enter file name"
          className='bg-blue-950 text-white  '
        />
        <button onClick={restoreFile} className='bg-green-400'>Restore File</button>
      </div>
    </div>
  );
};

export default Base64ToFileRestorer;
