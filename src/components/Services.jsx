import React from 'react';
import { motion } from "framer-motion";
import {AiFillIeCircle, AiFillAndroid,AiFillWindows} from "react-icons/ai";

const Services = ()=> {
    const animation={
        whileInView:{
           x:0,
           y:0,
           opacity:1, 
        },
        one:{
            x:"-100%",
            opacity:0,
        },
        two:{
            y:"-100%",
            opacity:0,
        },
        three:{
            y:"-100%",
            opacity:0,
        },
        four:{
            x:"100%",
            opacity:0,
        },
    }



  return <div id="services">
      <h2>Services</h2>
      <section>
        <motion.div className="serviceBox1" whileInView={animation.whileInView} 
        initial={animation.one}>
            <h3> 1+ </h3>
            <p>Years Experience</p>
        </motion.div>
        <motion.div className="serviceBox2" whileInView={animation.whileInView}
        initial={animation.two}>
            <AiFillIeCircle/>
            <span>Web Development</span>
            
        </motion.div>
        <motion.div className="serviceBox3" whileInView={animation.whileInView} initial={animation.three}
        //  transition={{
            // delay:0.2}}
        >
            <AiFillAndroid/>
            <span>Problem Solver</span>
            
        </motion.div>
        <motion.div className="serviceBox4" whileInView={animation.whileInView}
        initial={animation.four}>
            <AiFillWindows/>
            <span>Compititve Programmer</span>
            
        </motion.div>
      </section>
    </div>
};

export default Services;
