import React from 'react'
import './NoNote.css'

function NoNote({ createNewNote }) {
  return (
    <div className="no-notes">
      <h1>You have no notes</h1>
      <button className="first-note" onClick={createNewNote}>
        Create one now
      </button>
    </div>
  );
}

export default NoNote
