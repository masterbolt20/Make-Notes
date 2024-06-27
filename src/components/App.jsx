import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNote) => {
      return [...prevNote, newNote];
    });
  }
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((goneNotes, index) => {
        return index !== id;
      });
    });
  }
  console.log(notes);
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((todoNote, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={todoNote.title}
            content={todoNote.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
