import React, { useState } from 'react';
import axios from 'axios';

function UploadExcel() {
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('http://localhost:5000/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('File uploaded successfully!');
    } catch (err) {
      console.error(err);
      alert('Error uploading file');
    }
  };

  return (
    <form onSubmit={handleUpload}>
      <input type="file" accept=".xlsx,.xls" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit">Upload</button>
    </form>
  );
}

export default UploadExcel;
