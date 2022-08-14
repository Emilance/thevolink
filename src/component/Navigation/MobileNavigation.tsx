import { useState } from "react"
import styled from "styled-components"
import NavLink from "./Navlinks"
import {GrMenu} from 'react-icons/gr'
import {ImCross} from 'react-icons/im'

const MobileNavCon = styled.div`
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
   

        const OpenB  =  <OpenBurger 
                        onClick={()=>  setOpen(!open)}
                        size='35px'
                        color="green"
                        />

        const CloseB  =  <CloseBurger 
                        onClick={()=>  setOpen(!open)}
                        size='35px'
                        color="green"
                        />


     return(
         <MobileNavCon >
           {open ? CloseB : OpenB }
            {open  && <NavLink/>}
         </MobileNavCon>
     )
}

export default MobileNavigation;