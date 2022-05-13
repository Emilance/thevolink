import  React from 'react'
import logo from "../Images/logo.png"
import styled from 'styled-components'


const LogoContainer = styled.div`
    display: flex;
    height: 100%;

`
const Container = styled.div`
     height: 5rem;
`
const Logo = styled.h1`
    color:Green;
`


const Navbar = () =>{

    return (
        <Container>
        <LogoContainer>

            <img  src= {logo} alt="the volink logo"/>
            <Logo  >THEVOLINK</Logo>            
        </LogoContainer>
        </Container>
    )
}

export default Navbar