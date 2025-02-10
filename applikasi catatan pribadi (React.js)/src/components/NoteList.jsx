import React from "react";

const NoteList = ({ notes, deleteNote, toggleArchive }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <div key={note.id} className="note-item">
          <h3>{note.title}</h3>
          <p>{note.body}</p>
          <small>
            Dibuat pada: {new Date(note.createdAt).toLocaleString()}
          </small>
          <div className="note-actions">
            <button
              onClick={() => toggleArchive(note.id)}
              className="archive-btn"
            >
              {note.archived ? "Batalkan Arsip" : "Arsipkan"}
            </button>
            <button onClick={() => deleteNote(note.id)} className="delete-btn">
              Hapus
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
