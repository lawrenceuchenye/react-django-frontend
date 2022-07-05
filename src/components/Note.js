
const Note=({deleteData,readNote,title,date,data_id})=>{
  return(
    <div onDoubleClick={()=>readNote(data_id)} className="bg-gray-800 p-4 rounded border-l-4 border-indigo-400 flex justify-between items-center">
      <div>
        <h1 className="font-bold text-white">{title}</h1>
        <h3 className="font-bold text-white">{date}</h3>
      </div>
      <i className="fa fa-trash text-3xl text-white opacity-25 hover:text-red-500 hover:opacity-100" onClick={()=>deleteData(data_id)}></i>
    </div>
  )
}

export default Note
