import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";

const EditNote=({editData,deleteData,notes})=>{
  const [title,setTitle]=useState("");
  const [body,setBody]=useState("");
  const { id }=useParams();

  const getNote=(id)=>{
    const getTargetNote=notes.filter(function(note){
      if(note.id==id){
        return note;
      }
     return null;
    });
    return getTargetNote[0];
  } 

  const Home=()=>{
    window.location.replace("/");
  }


 let data={"title":"$","body":"#","id":4};
 data=getNote(id);
 useEffect(()=>{
   fetch(`http://localhost:5000/notes/${id}/`,{
       method:"GET"
   }).then(res=>{
      return res.json();
   }).then(json=>{
     setTitle(json.title);
     setBody(json.body);
   })

  },[]);

  return(
     <div className="bg-slate-900">
     
     <div className="m-4 pb-2">
         <form onSubmit={(e)=>editData(e,title,body,data.id)}>
           <div className="flex">
               <div className="w-2/8">
                  <button type="button" className="bg-slate-900 px-4 py-3 rounded mr-2 hover:bg-orange-500" style={{boxShadow:"0 2px 5px rgba(0,0,0.5)"}} onClick={()=>Home()}>
                       <i className="text-white text-4xl fa fa-angle-left"></i>
                   </button>
                </div>
              <input className="w-full outline-none px-2 py-5 rounded bg-gray-900 focus:bg-gray-800 text-white mb-3 text-1xl" type="text" placeholder="Title." style={{boxShadow:"0 2px 5px rgba(0,0,0,0.5)"}} onChange={(e)=>setTitle(e.target.value)} defaultValue={data ? data.title : ""} />
            </div>
           <div>
              <textarea type="text" placeholder="Write a note." className="border-none w-full px-2 py-4 text-1xl rounded outline-none bg-gray-900 ease-in focus:bg-gray-800 text-white focus:h-32" style={{boxShadow:"0 3px 5px rgba(0,0,0,0.3)",height:"400px"}} onChange={(e)=>setBody(e.target.value)} defaultValue={data ? data.body : ""}></textarea>
            </div>
            <div className="flex mb-4">
                <div className="w-full">
                  <button type="submit" className="bg-green-500 mt-2 w-full p-3 rounded" style={{boxShadow:"0 2px 5px rgba(0,0,0,0.5)"}}>
                     <i className="text-2xl text-white fas fa-save"></i>
                 </button>
               </div>
                <div className="w-2/6 ml-3">
                    <button type="button" className="outline-none bg-red-500 w-full p-3 rounded mt-2" style={{boxShadow:"0 2px 5px rgba(0,0,0,0.5)"}} onClick={()=>deleteData(id,true)}>
                      <i className=" text-2xl fa fa-trash font-bold text-white"></i>
                   </button>
                 </div>
            </div>
         </form>
      </div>
     </div>
  );
}

export default EditNote
