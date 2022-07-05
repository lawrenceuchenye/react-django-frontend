import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {useState} from "react";
import Navbar from "./components/Navbar";

import Home from "./Home";
import About from "./views/About";
import EditNote from "./views/EditNote";

function App() {
  const [notes,setNotes]=useState([
   {
    id:1,
    title:"Fake Note",
    body:"Hello this is a fake note",
    date:"Monday 7 July"
   },
  {
    id:2,
    title:"F Note",
    body:"Hello this is a fake note 2",
    date:"Monday 7 July"
   }
  ]);

  const saveData=(e,Title,Body)=>{
   e.preventDefault();

   const note={
    id:7,
    title:Title,
    body:Body,
    date:"Mond ks"
   }

   setNotes([...notes,note]);
   console.log(notes);
   window.location.replace("./");
  }

  const deleteData=(data_id)=>{
   console.log(data_id);
   const newNotes=notes.filter((note)=>(data_id !== note.id));
   setNotes(newNotes);
   window.location.replace("/");
  }
  return (
    <Router>
       <div className="ease-in duration-200 w-screen h-screen bg-slate-900 pt-4">
         <Navbar />
          <Routes>
              <Route path="/" element={<Home notes={notes} deleteData={deleteData}/>}/>
           </Routes>
          <Routes>
             <Route path="/about" element={<About />}/>
          </Routes>
          <Routes>
            <Route path="/editnote/:id/view" element={<EditNote saveData={saveData} deleteData={deleteData} notes={notes}/>}/>
          </Routes>
          <Routes>
            <Route path="/addnote" element={<EditNote saveData={saveData} isViewed="true" />}/>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
