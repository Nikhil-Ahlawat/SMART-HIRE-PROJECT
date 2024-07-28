import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes, editNote, deleteNote }) => {   // 3 Props
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} editNote={editNote} deleteNote={deleteNote} />
      ))}
    </div>
  );
};

export default NoteList;