import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from  "./Components/Pages/About.jsx"
import Footer from "./Components/Footer";
import { GithubProvider } from "./Components/Context/Github/GithubContext.js";
import Home from "./Components/Pages/Home";
import Navbar from "./Components/Navbar";
import NotFound from "./Components/Pages/NotFound"

function App() {
  return (
    <GithubProvider>
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
    </GithubProvider>
   
  );
}

export default App;
