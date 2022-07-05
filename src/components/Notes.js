import Note from "./Note";

const Notes=({deleteNote})=>{
 return(
   <div className="mx-4 my-3">
     <Note deleteNote={deleteNote} />
   </div>
  );
}

export default Notes
