import React, { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Split from "react-split";
import { nanoid } from "nanoid";
import Editor from "./components/editor/Editor";
import NoNote from './components/noNote/NoNote'

export default function App() {
  const defaultBodyText = `# Type your markdown note's title here

---

**Hello world!!!**

![Cat Keyboard Warrior](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWlxZ3Nucml2MDR1NHB1aWc5OXRpbjV4NWxyOW5wazdka2RlNmhlNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LHZyixOnHwDDy/giphy.gif)

\`\`\`javascript
import React from "react";
import ReactDOM from "react-dom";
\`\`\`
`;

  const [splitCollapse, setSplitCollapse] = useState(false)
  const [splitValues, setSplitValues] = useState([30, 70])

  function onSplitCollapse() {
    setSplitCollapse(prevState => !prevState);
    setSplitValues(prev => prev[0] === 30 ? [10, 90] : [30, 70]);
  }

  const [notes, setNotes] = React.useState(() =>
    JSON.parse(localStorage.getItem("notes")) || []
  );

  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
  );

  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: defaultBodyText,
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }

  function updateNote(text) {
    setNotes((oldNotes) =>
      oldNotes.map((oldNote) => {
        return oldNote.id === currentNoteId
          ? { ...oldNote, body: text }
          : oldNote;
      })
    );
  }

  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }

  function deleteNote() {
    setNotes((oldNotes) =>
      oldNotes.filter((note) => note.id !== currentNoteId)
    );
    setCurrentNoteId((prevId) => {
      const nextNote = notes.find((note) => note.id !== prevId);
      return nextNote ? nextNote.id : "";
    });
  }

  return (
    <main>
      {notes.length > 0 ? (
        <Split sizes={splitValues} direction="horizontal" className="split">
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            deleteNote={deleteNote}
            splitValue={onSplitCollapse}
            splitCollapse={splitCollapse}
          />
          {currentNoteId && notes.length > 0 && (
            <Editor currentNote={findCurrentNote()} updateNote={updateNote}/>
          )}
        </Split>
      ) : (
        <NoNote createNewNote={createNewNote} />
      )}
    </main>
  );
}
