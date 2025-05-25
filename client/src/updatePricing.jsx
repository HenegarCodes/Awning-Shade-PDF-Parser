import React, { useState } from 'react';
import axios from 'axios';

function UpdatePricing() {
  const [selectedOption, setSelectedOption] = useState("");
  const [file, setFile] = useState(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('option', selectedOption); // send new/update info if needed on backend

    try {
      await axios.post('http://localhost:5000/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('File uploaded successfully!');
      setFile(null);
      setSelectedOption("");
    } catch (err) {
      console.error(err);
      alert('Error uploading file');
    }
  };

  return (
    <div>
      <h1>Create or Update Spreadsheet Files</h1>

      <p>Is this an update to an old or a new spreadsheet?</p>

      <label>
        <input
          type="radio"
          name="spreadsheetOption"
          value="new"
          checked={selectedOption === "new"}
          onChange={handleOptionChange}
        />
        New
      </label>

      <label>
        <input
          type="radio"
          name="spreadsheetOption"
          value="update"
          checked={selectedOption === "update"}
          onChange={handleOptionChange}
        />
        Update
      </label>

      {selectedOption !== "" && (
        <form onSubmit={handleUpload} style={{ marginTop: '1em' }}>
          <input
            type="file"
            accept=".xlsx,.xls"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button type="submit" disabled={!file}>Upload</button>
        </form>
      )}
    </div>
  );
}

export default UpdatePricing;
