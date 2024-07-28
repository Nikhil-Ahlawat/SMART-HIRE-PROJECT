import React, { useState, useEffect } from 'react';

const NoteForm = ({ addNote, editNote, noteToEdit, clearEdit }) => {  //4 Props
  const [title, setTitle] = useState('');  //Hooks updating func.
  const [content, setContent] = useState('');

  useEffect(() => {
    if (noteToEdit) {
      setTitle(noteToEdit.title);
      setContent(noteToEdit.content);
    }
  }, [noteToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();  // Stops the default form submission behavior.
    if (noteToEdit) {
      editNote({ ...noteToEdit, title, content });
    } else {
      addNote({ id: Date.now(), title, content, timestamp: new Date().toLocaleString() });
    }
    setTitle('');
    setContent('');
    clearEdit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}  //Update the state
        required
      />
      <textarea 
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <button type="submit">{noteToEdit ? 'Update Note' : 'Add Note'}</button>
      {noteToEdit && <button onClick={clearEdit}>Cancel</button>}
    </form>
  );
};

export default NoteForm;