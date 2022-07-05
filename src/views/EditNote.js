import {useState} from "react";
import {useParams} from "react-router-dom";

const EditNote=({isViewed,saveData,deleteData,notes})=>{
  const [title,setTitle]=useState("");
  const [body,setBody]=useState("");
  const { id }=useParams();
  const data=notes.filter(function(note){
    if(note.id == id){
      return note;
    }
  });
  return(
     <div className="m-4">
         <form onSubmit={(e)=>saveData(e,title,body)}>
           <div>
              <input className="w-full outline-none px-2 py-5 rounded bg-gray-900 focus:bg-gray-800 text-white mb-3 text-1xl" type="text" placeholder="Title." style={{boxShadow:"0 2px 5px rgba(0,0,0,0.5)"}} onChange={(e)=>setTitle(e.target.value)} value={data ? data[0].title : ""} />
            </div>
           <div>
              <textarea type="text" placeholder="Write a note." className="border-none w-full px-2 py-4 text-1xl rounded outline-none bg-gray-900 focus:bg-gray-800 text-white" style={{boxShadow:"0 3px 5px rgba(0,0,0,0.3)",height:"400px"}} onChange={(e)=>setBody(e.target.value)} value={data ? data[0].body : ""}></textarea>
            </div>
            <div className="flex mb-4">
                <div className={(isViewed!=="true") ? "w-2/3" :"w-full"}>
                  <button type="submit" className="bg-green-500 mt-2 w-full p-3 rounded" style={{boxShadow:"0 2px 5px rgba(0,0,0,0.5)"}}>
                     <i className="text-2xl text-white fas fa-save"></i>
                 </button>
             </div>
            {(isViewed!=="true") &&
                 (<div className="w-2/6 ml-3">
                    <button type="button" className="bg-red-500 w-full p-3 rounded mt-2" style={{boxShadow:"0 2px 5px rgba(0,0,0,0.5)"}} onClick={()=>deleteData(data[0].id)}>
                      <i className=" text-2xl fa fa-trash font-bold text-white"></i>
                   </button>
                 </div>)}
            </div>
         </form>
      </div>
  );
}

export default EditNote
