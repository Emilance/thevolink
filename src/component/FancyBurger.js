import { useState } from 'react'
import './fancy.css'


const FancyBurger =  ()=>{
const clickHandler =()=>{
    if (typeof window !== "undefined") {
    const btn = document.querySelector(".fancy-burger");

      btn.querySelectorAll("span").forEach((span) => span.classList.toggle("open"));
    //   toggleSideBar()
    }
    
}

    return(
        <div   className='burger'>

        <button onClick={clickHandler} className="fancy-burger">
        <span className="rectangle rectangle--top rectangle--small"></span>
        <span className="rectangle rectangle--middle"></span>
        <span className="rectangle rectangle--bottom rectangle--small"></span>
        </button>
        </div>
    )
}

export default FancyBurger