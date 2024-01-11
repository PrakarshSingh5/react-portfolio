import React from 'react'
import lo from "../assets/imgprak.png"
import {
    AiFillAlipayCircle,
    AiFillInstagram,
    AiFillGithub,
    AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
<div>
      <img src={lo} alt="Founder" />
      <h2>Prakarsh Singh</h2>
      <p>Hard work is the key of succes.</p>
    </div>
    <aside>
        <h2>Socail Media</h2>
        <article>
            <a href='https://github.com/PrakarshSingh5'>
            <AiFillAlipayCircle/>
            </a>
            <a href='https://instagram.com/PrakarshSingh5'>
            <AiFillInstagram/>
            </a>
            <a href='https://github.com/PrakarshSingh5'>
            <AiFillGithub/>
            </a>
           
        </article>
    </aside>
    <a href="#home">
        <AiOutlineArrowUp/>
    </a>
    </footer>
    
  )
}

export default Footer
