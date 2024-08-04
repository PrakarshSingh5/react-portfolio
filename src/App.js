import Header,{Mininav}  from "./components/Header";
import Home  from "./components/Home";
import Work  from "./components/Work";
import Timeline  from "./components/Timeline";
import Services  from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {Toaster} from "react-hot-toast";
import {  useState } from "react";

function App() {
  const [isOpen,setisOpen]=useState(false);
 
  
  return (
    <>
   <Mininav isOpen={isOpen} setisOpen={setisOpen}/>
     <Header isOpen={isOpen} setisOpen={setisOpen}/>

     <Home/>
     <Work/>
     <Timeline/>
     <Services/>
    
<Contact/>
<Footer/>
<Toaster/>
    
    </>
  );
}

export default App;
