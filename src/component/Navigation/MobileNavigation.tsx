import { useState } from "react"
import styled from "styled-components"
import NavLink from "./Navlinks"
import {GrMenu} from 'react-icons/gr'
import {ImCross} from 'react-icons/im'
import FancyBurger from "../FancyBurger"

const MobileNavCon = styled.div`
    z-index: 100;
    position: fixed;
     right: 5%;
    @media (min-width:700px) {
        display: none;
       
    }


`
const OpenBurger = styled(GrMenu)`
    position: fixed;
    z-index: 2500;
    top:1.5rem;
    right: 1.5rem;
    cursor: pointer;
    color: green;
  
`
const CloseBurger = styled(ImCross)`
    position: fixed;
    z-index: 2500;
    top:1.5rem;
    right: 1.5rem;
    cursor: pointer;
    color:green;
`


const  MobileNavigation = () => {
        const [open, setOpen]  = useState(false)
        const toggleSideBar=()=>{
            setOpen(!open)
        }

       


     return(
         <MobileNavCon >
            <FancyBurger  />
            {open  && <NavLink/>}
         </MobileNavCon>
     )
}

export default MobileNavigation;