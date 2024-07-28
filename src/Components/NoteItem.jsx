import React from 'react';

const NoteItem = ({ note, editNote, deleteNote }) => {
  return (
    <div className="note-items">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <small>{note.timestamp}</small>
      <button onClick={() => editNote(note)}>Edit</button>
      <button onClick={() => deleteNote(note.id)}>Delete</button>
    </div>
  );
};

export default NoteItem;