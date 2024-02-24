// Notes.js

import React, { useState } from "react";

const Notes = () => {
  const [uploadedNotes, setUploadedNotes] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    const uploadedNoteLink = "https://example.com/uploaded-note.pdf";

    setUploadedNotes([...uploadedNotes, uploadedNoteLink]);
  };

  return (
    <div>
      <h2>Notes</h2>

      <input type="file" onChange={handleFileUpload} accept=".pdf" />

      <h3>Uploaded Notes:</h3>
      <ul>
        {uploadedNotes.map((note, index) => (
          <li key={index}>
            <a href={note} target="_blank" rel="noopener noreferrer">
              View Note {index + 1}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
