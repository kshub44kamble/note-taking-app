import React from "react";
import db from "./firebase";

function Note(props) {
  return (
    <div>
      <h4>
        <b>{props.note.note}</b>
      </h4>
      {/* <p>{props.description.description}</p> */}

      <button
        onClick={(event) => db.collection("notes").doc(props.note.id).delete()}
      >
        Delete
      </button>

      {/* <button
            onClick={event => db.collection('descriptions').doc(props.description.id).delete()}>Delete</button> */}
    </div>
  );
}

export default Note;
