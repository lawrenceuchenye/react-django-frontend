import Utils from "./components/Utils";
import Notes from "./components/Notes";

const Home=()=>{
  const deleteNote=()=>{
    alert("delete Note");
  }
  const addNote=()=>{
    alert("add note");
  }

  return (
    <div className="ease-in duration-200  bg-slate-900 pt-4">
           <Notes deleteNote={deleteNote}/>
           <Utils addNote={addNote}/>
    </div>
  );
}

export default Home
