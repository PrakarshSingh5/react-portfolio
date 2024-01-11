import React from 'react'
import { motion } from "framer-motion";
import {BsArrowUpRight, BsChevronDown} from "react-icons/bs"
import Typerwriter from "typewriter-effect";
import photo from '../assets/imgprak.png';

const Home = () => {
    const animations={
        h1:{
            initial:{
                x:"-100%",
                opacity:0,
            },
            whileInView:{
                x:0,
                opacity:1,
            },
        },

        button:{
            initial:{
                y:"-100%",
                opacity:0,
            },
            whileInView:{
                y:0,
                opacity:1,
            },
        },

    };
  return <div id="home">
    <section>
    <div>
        
<motion.h1 {...animations.h1}>
    Hi, I Am <br/> Prakarsh Singh
    </motion.h1>

<Typerwriter 
options={{strings:["A Developer","A Desingner", "A Creator"],
autoStart:true,
loop:true,
cursor:"",
wrapperClassName:"typewriterpara",}}
/>
<div>
    <a href="mailto:prakarshsinghlmpj@gmail.com">
        Hire Me
    </a>
    <a href="#work">
        Projects
         <BsArrowUpRight/>
    </a>
</div>
<article>
    <p>
    +<span>100</span></p>
    <span>Clients WorldWiede
       </span></article> 

      <aside>
      <article><p>
    +<span>500</span></p>
    <span>Projects Made
       </span>
    </article>

       <article data-special>
        <p>
      Contact</p>
    <span>prakarshsinghlmp@gamil.com
       </span>
       </article>

           </aside>
    </div>
    </section>
    <section>
        <img src={photo} alt='Prakarsh'/>
    </section>
    <BsChevronDown/>
  </div>

}

export default Home
