import React, { useState } from "react";

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [archived, setArchived] = useState(false); // State untuk mengarsipkan

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && body.trim()) {
      addNote({
        title,
        body,
        archived, // Menambahkan status arsip
      });
      // Reset form setelah submit
      setTitle("");
      setBody("");
      setArchived(false); // Reset status arsip
    }
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <div>
        <label htmlFor="title">Judul Catatan</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={50}
          required
        />
      </div>
      <div>
        <label htmlFor="body">Isi Catatan</label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="archived">Arsipkan Catatan?</label>
        <input
          type="checkbox"
          id="archived"
          checked={archived}
          onChange={() => setArchived(!archived)} // Mengubah status arsip
        />
      </div>
      <button type="submit" className="submit-btn">
        Tambah Catatan
      </button>
    </form>
  );
};

export default NoteForm;
