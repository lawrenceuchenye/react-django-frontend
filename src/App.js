import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./Home";
import About from "./views/About";
import EditNote from "./views/EditNote";

function App() {
  return (
    <Router>
       <div className="ease-in duration-200 w-screen h-screen bg-slate-900 pt-4">
         <Navbar />
          <Routes>
              <Route path="/" element={<Home />}/>
           </Routes>
          <Routes>
             <Route path="/about" element={<About />}/>
          </Routes>
          <Routes>
            <Route path="/editnote" element={<EditNote />}/>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
