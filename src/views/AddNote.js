import {useState} from "react";

const AddNote=({saveData})=>{
  const [title,setTitle]=useState("");
  const [body,setBody]=useState("");

  const Home=()=>{
    window.location.replace("/");
  }

  return(
     <div className="bg-slate-900">
     <div className="m-4 pb-2">
         <form onSubmit={(e)=>saveData(e,title,body)}>
           <div>
              <input className="w-full outline-none px-2 py-5 rounded bg-gray-900 focus:bg-gray-800 text-white mb-3 text-1xl" type="text" placeholder="Title." style={{boxShadow:"0 2px 5px rgba(0,0,0,0.5)"}} onChange={(e)=>setTitle(e.target.value)}/>
            </div>
           <div>
              <textarea type="text" placeholder="Write a note." className="border-none w-full px-2 py-4 text-1xl rounded outline-none bg-gray-900 focus:bg-gray-800 text-white" style={{boxShadow:"0 3px 5px rgba(0,0,0,0.3)",height:"400px"}} onChange={(e)=>setBody(e.target.value)}></textarea>
            </div>
            <div className="flex mb-4">
                <div className="w-2/8 mt-2">
                  <button type="button" className="bg-orange-500 px-4 py-2 rounded mr-2" style={{boxShadow:"0 2px 5px rgba(0,0,0.5)"}} onClick={()=>Home()}>
                       <i className="text-white text-4xl fa fa-angle-left"></i>
                   </button>
                </div>
                <div className="w-full">
                  <button type="submit" className="bg-green-500 mt-2 w-full p-3 rounded" style={{boxShadow:"0 2px 5px rgba(0,0,0,0.5)"}}>
                     <i className="text-2xl text-white fas fa-save"></i>
                 </button>
             </div>
            </div>
         </form>
      </div>
      </div>
  );
}

export default AddNote
