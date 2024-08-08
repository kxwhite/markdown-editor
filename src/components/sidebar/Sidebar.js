import React from "react";
import "./Sidebar.css";
import { XSquare } from "../../assets/XSquare";
import { SidebarExpandIcon } from "../../assets/SidebarExpandIcon";
import { SidebarCollapseIcon } from "../../assets/SidebarCollapseIcon";

export default function Sidebar(props) {
  const noteElements = props.notes.map((note, index) => (
    <div key={note.id} className="sidebar-container">
      <div
        className={`title ${
          note.id === props.currentNote.id ? "selected-note" : ""
        }`}
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>
        <h4
          className="cancel-btn"
          onClick={() => props.deleteNote(note.id)}
        >
          <XSquare />
        </h4>
      </div>
    </div>
  ));


  return (
    <section className="pane sidebar">
      <div className="sidebar--new-note-container">
        <div className="sidebar--header">
          <h3>{!props.splitCollapse ? "Notes" : null}</h3>
          <div onClick={props.splitValue}>
            {!props.splitCollapse ? <SidebarExpandIcon /> : <SidebarCollapseIcon />}
          </div>
        </div>
        <button className="new-note" onClick={props.newNote} style={{ display: `${!props.splitCollapse ? "block" : "none"}`}}>
          New note
        </button>
      </div>
      {noteElements}
    </section>
  );
}
