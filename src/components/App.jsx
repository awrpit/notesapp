import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [inputText, setInputText] = React.useState({
    title: "",
    content: ""
  });
  const [notes, setNotes] = React.useState([])


  function getInput(event) {
    let name = event.target.name;
    let value = event.target.value;
     setInputText(prevInputs => {
       return {...prevInputs,
      [name]: value }
     })
  }

  function addNotes() {
    setNotes(prevNotes => {
      return [...prevNotes, inputText]
    })
    setInputText({
      title: "",
      content: ""})
  }
  function deleteNote(id) {
   setNotes(prevNotes => {
     return prevNotes.filter((theNote, index) => {
       return index !== id;
     })
   })
  }
  return (
    <div>
      <Header />
      <CreateArea title={inputText.title}
        content={inputText.content}
        getInput={getInput}
        addNotes={addNotes}
      />
      <div> {
        notes.map((newNote, index) => {
          return <Note 
            key={index}
            id={index}
            title={newNote.title}
            content={newNote.content}
            deleteNote={deleteNote}
          />
        })
      }
      </div>
      <Footer />
    </div>
  );
}

export default App;
