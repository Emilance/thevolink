import  React from 'react'
import logo from "../Images/logo.png"
import styled from 'styled-components'
import Navigation from './Navigation/Navigation'
import MobileNavigation from './Navigation/MobileNavigation'



const LogoContainer = styled.div`
    display: flex;
    height: 100%;
    flex:1;
    align-items: center;

`
const Container = styled.div`
     height: 5rem;
     display: flex;
     justify-content: space-between;
     align-items: center;
     margin: 0 2rem;

 @media (max-width:600px) {
    margin: 0;
    height:4rem;
    
  }
     
`
const Logo = styled.h1`
    color:Green;
    font-family: 'Square Peg', cursive;
    @media (max-width:860px) {
        font-size:1.5rem;
    }
`
const NavCon = styled.div`
    flex :1;
`
const Button = styled.div`
    border: 2px dotted green;
    padding: 0.6rem;
    width: 6rem;
    height: 1rem;
    border-radius: 10px;
    font-weight: 700;
    color:green;
    cursor: pointer;
    display: grid;
    align-content: center;
   
&:hover {
    background-color: green;
    color:white;
}
@media (max-width:860px) {
        width:4rem;
        height: 1rem;
        display:none;
    }
`
const Image = styled.img`
     height: 5rem;
@media (max-width:860px) {
       height:4rem;
    }
`




const Navbar = () =>{

    return (
        <Container>
        <LogoContainer>

            <Image  src= {logo} alt="the volink logo"/>
            <Logo  >TheVolink</Logo>            
        </LogoContainer>
        <NavCon>
             <Navigation/>
             <MobileNavigation/>
        </NavCon>
        <Button >JOIN US </Button>
        </Container>
    )
}

export default Navbar