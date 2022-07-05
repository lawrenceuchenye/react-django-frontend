
const Utils=({addNote})=>{
   return(
     <div className="m-4 mx-5 absolute bottom-16 right-2">
        <i onClick={addNote} className="fa fa-plus text-6xl text-white opacity-25 hover:opacity-100 px-6 py-5" style={{borderRadius:"50%",boxShadow:"0 2px 5px rgba(0,0,0,0.4)"}}></i>
     </div>
   );
}

export default Utils
