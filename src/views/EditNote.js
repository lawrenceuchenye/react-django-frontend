const EditNote=()=>{
  return(
   <div className="m-4">
     <form>
       <div>
         <input className="outline-none px-2 py-5 rounded bg-gray-900 focus:bg-gray-800 text-white mb-3 text-1xl" type="text" placeholder="Title" style={{boxShadow:"0 2px 5px rgba(0,0,0,0.5)"}}/>
        </div>
       <div>
         <textarea type="text" placeholder="Write a note" className="border-none w-full px-2 py-4 text-1xl rounded outline-none bg-gray-900 focus:bg-gray-800 text-white" style={{boxShadow:"0 3px 5px rgba(0,0,0,0.3)",height:"400px"}}></textarea>
        </div>
        <div className="flex mb-4">
         <div className="w-2/3">
            <button type="submit" className="bg-green-500 mt-2 w-full p-3 rounded" style={{boxShadow:"0 2px 5px rgba(0,0,0,0.5)"}}>
               <span className="text-2xl text-white">Save</span>
             </button>
          </div>
          <div className="w-2/6 ml-3">
           <button type="button" className="bg-red-500 w-full p-3 rounded mt-2" style={{boxShadow:"0 2px 5px rgba(0,0,0,0.5)"}}>
              <i className=" text-2xl fa fa-times font-bold text-white"></i>
            </button>
           </div>
        </div>
     </form>
   </div>
  );
}

export default EditNote
