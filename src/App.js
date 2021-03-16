import React, { useEffect, useState } from "react";
import "./App.css";
import db from "./firebase";
import firebase from "firebase";
import Note from "./Note";
import DescriptionN from "./DescriptionN";

function App() {
  const [notes, setNotes] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    // for notes and title
    db.collection("notes").onSnapshot((snapshot) => {
      setNotes(
        snapshot.docs.map((doc) => ({ id: doc.id, note: doc.data().note }))
      );
    });

    // for description
    db.collection("descriptions").onSnapshot((snapshot) => {
      setDescriptions(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          description: doc.data().description,
        }))
      );
    });
  }, []);

  const addNote = (event) => {
    event.preventDefault();

    // for notes and title
    db.collection("notes").add({
      note: title,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setNotes([...notes, title]);
    setTitle("");

    // desc
    db.collection("descriptions").add({
      description: desc,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setDescriptions([...descriptions, desc]);
    setDesc("");
  };

  return (
    <div className="App">
      <div className="app__heading">
        <div className="app__title">
      <h1 className="">Note taking app!</h1>

        </div>
      <div className="app__searchInput">

      <input type="text" className="" placeholder="Search" />
      <button className="app__searchBtn">Search</button>
      </div>
      </div>
      <form className="app__form">
        <input
          className="app__input"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Enter title"
        />
        <textarea
          className="app__textarea"
          type="text"
          value={desc}
          onChange={(event) => setDesc(event.target.value)}
        />
        <button className="app__btn" type="submit" onClick={addNote}>
          Add note
        </button>
      </form>
      <div className="app__card">
        <div className="app__showData">
          {notes.map((note) => (
            <Note note={note} />

            // <li>{note}</li>
          ))}
          {descriptions.map((description) => (
            <DescriptionN description={description} />
            // <li>{description.text}</li>
          ))}
        </div>
        <></>
      </div>
    </div>
  );
}

export default App;
