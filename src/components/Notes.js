import Note from "./Note";

const Notes=({notes,deleteData,readNote})=>{
 return(
     notes.map(note=>(
       <div className="mx-4 my-3">
          <Note title={note.title} date={note.date} data_id={note.id} deleteData={deleteData} readNote={readNote} />
       </div>
     ))
  );
}

export default Notes
