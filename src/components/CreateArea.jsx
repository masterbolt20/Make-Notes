import React, { useState } from "react";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });

  function changeNote(event) {
    const { name, value } = event.target;
    setNewNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function submitNote(event) {
    props.onAdd(newNote);
    setNewNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={changeNote}
          name="title"
          placeholder="Title"
          value={newNote.title}
        />
        <textarea
          onChange={changeNote}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={newNote.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
