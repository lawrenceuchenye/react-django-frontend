
const Navbar=()=>{
  return(
    <div className="flex justify-between px-5 py-8 shadow-lg m-4" style={{boxShadow:"0 2px 6px rgba(0,0,0,0.5)",borderRadius:"3px"}}>
       <h1 className="font-bold text-3xl text-orange-500"><a href="./">RDNOTES</a></h1>
       <h3 className="font-bold text-2xl text-white"><a href="/about" className="">about</a></h3>
    </div>
   );
}

export default Navbar
