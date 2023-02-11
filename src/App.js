import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "./Components/Footer";
import Home from "./Components/Pages/Home";
import Navbar from "./Components/Navbar";
import About from  "./Components/Pages/About.jsx" 
import NotFound from "./Components/Pages/NotFound"

function App() {
  return (
    <Router>
 <div className="flex flex-col justify-between  h-screen">
     <Navbar/>
    <main> 
      <Routes>
<Route path="/" element ={<Home/>}/>
<Route path="/about" element ={<About/>}/>
<Route path="/NotFound" element ={<NotFound/>}/>
<Route path="/*" element ={<NotFound/>}/>
        
      </Routes>
      
      
      </main> 
   <Footer/>
    </div>
    </Router>
   
  );
}

export default App;
