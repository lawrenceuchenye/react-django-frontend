import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {useState,useEffect} from "react";
import Navbar from "./components/Navbar";

import Home from "./Home";
import About from "./views/About";
import EditNote from "./views/EditNote";
import AddNote from "./views/AddNote";

function App() {
  const [notes,setNotes]=useState([]);


  useEffect(()=>{
     const fetchNotes=async()=>{
        await fetch("http://localhost:8000/api/notes/").then(res=>{
         return res.json()
       }).then(json=>{
        alert(json);
       });
      /* const data=await res.json();
       console.log(data);
       alert(data);
       setNotes(data);*/
     }

     fetchNotes();
  },[]);


  const getDate=()=>{
     let d=new Date();
     let months=["Jan","Feb","Mar","Apri","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
     let days=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
  
     let day=days[d.getDay()];
     let date=d.getDate();
     let month=months[d.getMonth()];
     let year=d.getFullYear();
     return `${day} ${date} ${month},${year}`;
   }

  const saveData=async (e,Title,Body)=>{
   e.preventDefault();
   const gdate=getDate();
   const note={
    title:Title,
    body:Body,
    date:gdate
   }

   await fetch("http://localhost:5000/notes",{
     method:"POST",
     headers:{
      "Content-type":"application/json"
     },
     body:JSON.stringify(note)
   });
   window.location.replace("./");
  }


 const getNote=async (id)=>{
   const res=await fetch(`http://localhost:5000/notes/${id}/`,{
      method:"GET"
    });
    const data=await res.json();
    return data;
 }

 
 const editData=async (e,title,body,id)=>{
   e.preventDefault();
   const date=getDate();
   const note=await getNote(id);
   let newData={title,body,date}

   console.log(newData);

   await fetch(`http://localhost:5000/notes/${id}`,{
     method:"PUT",
     headers:{
      "Content-Type":"application/json"
     },
     body:JSON.stringify(newData)
   });
  
   window.location.replace("/");
  }

  const deleteData=async(data_id,redirect)=>{
   await fetch(`http://localhost:5000/notes/${data_id}/`,{
     method:"DELETE"
   });
   const newNotes=notes.filter((note)=>(data_id !== note.id));
   setNotes(newNotes);
   if(redirect){
     window.location.replace("/");
   }
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
            <Route path="/editnote/:id/view" element={<EditNote editData={editData} deleteData={deleteData} notes={notes}/>}/>
          </Routes>
          <Routes>
            <Route path="/addnote" element={<AddNote saveData={saveData}/>}/>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
