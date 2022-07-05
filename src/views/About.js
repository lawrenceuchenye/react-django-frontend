
const About=()=>{
  return(
    <div className="p-3 m-4" style={{boxShadow:"0 3px 5px rgba(0,0,0,0.5)"}}>
       <div>
         <h1 className="text-2xl text-white mb-1">Built with:</h1>
         <ul>
           <li className="mb-2">
              <h2 className="text-orange-300 uppercase">Html</h2>
            </li>
           <li className="mb-2">
             <h2 className="text-blue-300 uppercase">Css</h2>
            </li>
           <li className="mb-2">
              <h2 className="text-yellow-300 uppercase">Javascript</h2>
             </li>
           <li className="mb-2">
              <h2 className="text-blue-300 uppercase">React Front-End FrameWork(Library)</h2>
            </li>
           <li className="mb-2">
              <h2 className="text-green-300 uppercase">Django Back-End Framework</h2>
            </li>
         </ul>
        </div>
        <div className="m-4 text-center w-full">
           <h1 className="font-bold text-white text-2xl mb-1">Copyright © 2022</h1>
           <h4 className="text-white">v1.0.0</h4>
         </div>
    </div>
  )
}

export default About
