import Utils from "./components/Utils";
import Notes from "./components/Notes";

const Home=({notes,deleteData})=>{
  const addNote=()=>{
    window.location.replace("/addnote");
  }
 const readNote=(id)=>{
   window.location.replace(`/editnote/${id}/view`);
 }

  return (
    <div className="ease-in duration-200  bg-slate-900 pt-4">
           <Notes notes={notes} deleteData={deleteData} readNote={readNote}/>
           <Utils addNote={addNote}/>
    </div>
  );
}

export default Home
