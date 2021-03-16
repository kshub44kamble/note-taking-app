import React from "react";
import db from "./firebase";

function DescriptionN(props) {
  return (
    <div>
      <p>{props.description.description}</p>

      <button
        onClick={(event) =>
          db.collection("descriptions").doc(props.description.id).delete()
        }
      >
        Delete
      </button>
    </div>
  );
}

export default DescriptionN;
