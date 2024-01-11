import React from 'react'
import {AiOutlineMenu} from "react-icons/ai";
const Header = ({isOpen,setisOpen}) => {
  return (
    <>
    <nav>
<NavContent setisOpen={setisOpen}/>

 </nav>
 <button className="navboton" onClick={()=>setisOpen(!isOpen)}>
    <AiOutlineMenu/>
    </button>
  </>
  );
};
export const Mininav = ({isOpen,setisOpen}) => {
    return (
      <div className={`navPhone ${isOpen?"navPhoneComes":""}`}>
        <NavContent setisOpen={setisOpen}/>
      </div>
    )
}
const NavContent=({setisOpen})=>(
    <>
    <h2>CodePrak</h2>
    <div>
        <a onClick={()=>setisOpen(false)} href='#home' >Home</a> 
        <a onClick={()=>setisOpen(false)} href='#work' >Work</a> 
        <a onClick={()=>setisOpen(false)} href='#timeline' >Experince</a> 
        <a onClick={()=>setisOpen(false)} href='#services' >Services</a> 
        <a onClick={()=>setisOpen(false)} href='#testimonial' >Textimonial</a> 
        <a onClick={()=>setisOpen(false)} href='#contact' >Contact</a> 
    </div>
    <a href='mailto:prakarshsingh1@gmail.com'>
        <button>Email</button>
    </a>
    </>

);

export default Header
