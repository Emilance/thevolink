import styled from "styled-components"


const Ul = styled.ul`
    list-style: none;
    display: flex;
    color: black;
    justify-content: space-evenly;
    max-width:30rem;
    
    @media (max-width:700px) {
        flex-direction: column;
        position: fixed;
    
        top:4rem;
        justify-content: flex-start;
        align-items: center;
        right:3rem;
        width: 90%;
        height: 100vh;
      
        background:linear-gradient(green, #2f2f9ee6, #000000ca);
    }
    @media (max-width:700px) {
        width: 100%;
        right: 0;
        
    }

`
const List  = styled.li`
    

    @media (max-width:700px) {
      text-align: start;
   
      margin: 1.3rem  1.3rem 0 0.8rem;
    }
`
const NavAnchor = styled.a`
     color:black;
     text-decoration: none;
     font-size: 0.9rem;
     font-weight:500;
     padding: 0.5rem;
     border-radius: 0.33rem;
     &:hover {
         border: 1px solid green;
         color:green
     }

     @media (max-width:700px) {
        color:white;
        margin-bottom: 1rem;
     }   
`

const NavLink = () => {
  return (
      <Ul>
          <List >
              <NavAnchor  href="#">
                  Home
              </NavAnchor>
          </List>
          <List >
              <NavAnchor  href="#">
                  About Us
              </NavAnchor>
          </List>
          <List >
              <NavAnchor  href="#">
                  Our Team
              </NavAnchor>
          </List>
          <List >
              <NavAnchor  href="#">
                  Contact Us
              </NavAnchor>
          </List>
      </Ul>
  )
}


export default   NavLink;