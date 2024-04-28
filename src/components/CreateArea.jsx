import React, { useState } from "react";

function CreateArea(props) {
    const [note , setNote] = useState({title:"", description: ""});
    
    function handleChange(event){
        const {name, value} =  event.target;  //destructuring assignment
        setNote( prevNote => {
            return{
                ...prevNote,
                [name]:value
            };
        });
        }

    function submitNote(event){
        props.onAdd(note);
        setNote({
            title:"", description: ""
        });
        event.preventDefault();

    } 

  return (
    <div>
      <form>
        <input 
        onChange={handleChange} 
        name="title" 
        placeholder="Title" 
        value={note.title}/>

        <textarea 
        onChange={handleChange} 
        name="description" 
        placeholder="Take a note..." rows="3" 
        value={note.description} />

        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
