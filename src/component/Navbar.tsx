import  React from 'react'
import logo from "../Images/logo.png"
import styled from 'styled-components'
import Navigation from './Navigation/Navigation'
import MobileNavigation from './Navigation/MobileNavigation'


const LogoContainer = styled.div`
    display: flex;
    height: 100%;
    flex:1;

`
const Container = styled.div`
     height: 5rem;
     display: flex;
     justify-content: space-between;
     align-items: center;
`
const Logo = styled.h1`
    color:Green;
`
const NavCon = styled.div`
    flex :1;
`


const Navbar = () =>{

    return (
        <Container>
        <LogoContainer>

            <img  src= {logo} alt="the volink logo"/>
            <Logo  >THEVOLINK</Logo>            
        </LogoContainer>
        <NavCon>
             <Navigation/>
             <MobileNavigation/>
        </NavCon>
        </Container>
    )
}

export default Navbar