
import React, { useState, useEffect } from 'react';

interface Note {
  title: string;
  text: string;
}

const MyNotes: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteText, setNewNoteText] = useState('');
  const [editingNote, setEditingNote] = useState<Note | null>(null);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = () => {
    const trimmedTitle = newNoteTitle.trim();
    const trimmedText = newNoteText.trim();

    if (trimmedTitle !== '' && trimmedText !== '') {
      const newNote: Note = {
        title: trimmedTitle,
        text: trimmedText,
      };

      if (!notes.find(note => note.title === newNote.title)) {
        setNotes([...notes, newNote]);
        setNewNoteTitle('');
        setNewNoteText('');
      } else {
        alert("A note with that title already exists!");
      }
    }
  };

  const handleDeleteNote = (title: string) => {
    setNotes(notes.filter((note) => note.title !== title));
    if (editingNote && editingNote.title === title) {
      setEditingNote(null);
    }
  };

  const handleEditNote = (note: Note) => {
    setEditingNote({ ...note });
  };

  const handleUpdateNote = () => {
    if (editingNote && editingNote.text.trim() !== '') {
      setNotes(
          notes.map((note) =>
              note.title === editingNote.title ? { ...note, text: editingNote.text } : note
          )
      );
      setEditingNote(null);
    }
  };

  return (
      <div>
        <h1>Notes App</h1>

        <div>
          <input
              type="text"
              placeholder="Note Title"
              value={newNoteTitle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewNoteTitle(e.target.value)}
          />
          <textarea
              placeholder="Enter your note..."
              value={newNoteText}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNewNoteText(e.target.value)}
          />
          <button onClick={handleAddNote}>Add Note</button>
        </div>

        <h2>My Notes:</h2>
        <ul>
          {notes.map((note) => (
              <li key={note.title}>
                {editingNote && editingNote.title === note.title ? (
                    <div>
                <textarea
                    value={editingNote.text}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setEditingNote({ ...editingNote, text: e.target.value })}
                />
                      <button onClick={handleUpdateNote}>Update</button>
                      <button onClick={() => setEditingNote(null)}>Cancel</button>
                    </div>
                ) : (
                    <div>
                      <h3>{note.title}</h3>
                      <p>{note.text}</p>
                      <button onClick={() => handleEditNote(note)}>Edit</button>
                      <button onClick={() => handleDeleteNote(note.title)}>Delete</button>
                    </div>
                )}
              </li>
          ))}
        </ul>
      </div>
  );
};

export default MyNotes;