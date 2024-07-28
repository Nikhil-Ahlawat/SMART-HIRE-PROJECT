import React, { useState, useEffect } from 'react';
import NoteForm from './Components/NoteForm';
import NoteList from './Components/NoteList';
import Pagination from './Components/Pagination';
import './Style.css';


const App = () => {
  const [notes, setNotes] = useState([]);
  const [noteToEdit, setNoteToEdit] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);         //  Hooks
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const editNote = (updatedNote) => {
    setNotes(notes.map((note) => (note.id === updatedNote.id ? updatedNote : note)));
    setNoteToEdit(null);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const clearEdit = () => {
    setNoteToEdit(null);
  };

  const notesPerPage = 10;
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const totalPages = Math.ceil(filteredNotes.length / notesPerPage);
  const displayedNotes = filteredNotes.slice((currentPage - 1) * notesPerPage, currentPage * notesPerPage);

  return (
    <div className="app">
      <h1>Simple Note Taking App</h1>
      <NoteForm 
        addNote={addNote} 
        editNote={editNote} 
        noteToEdit={noteToEdit} 
        clearEdit={clearEdit} 
      />
      <input 
        type="text"
        placeholder="Search notes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <NoteList 
        notes={displayedNotes} 
        editNote={setNoteToEdit} 
        deleteNote={deleteNote} 
      />
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        setCurrentPage={setCurrentPage} 
      />
    </div>
  );
};

export default App;