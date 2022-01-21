import React from "react";
import { isPropertySignature } from "typescript";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input name="title" onChange={props.getInput} value={props.title} placeholder="Title" />
        <textarea name="content" onChange={props.getInput} value={props.content} placeholder="Take a note..." rows="3" />
        <button onClick={(e) => { 
          e.preventDefault();
          return props.addNotes() }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
