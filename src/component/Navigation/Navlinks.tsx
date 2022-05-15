import styled from "styled-components"

const Ul = styled.ul`
    list-style: none;
    display: flex;
    color: black;
    justify-content: space-evenly;
    max-width:35rem;
    
    @media (max-width:700px) {
        flex-direction: column;
        position: fixed;
        z-index: 2000;
        top:4rem;
        justify-content: flex-start;
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
     font-size: 1rem;
     font-weight:700;
     padding: 0.5rem;
     border-radius: 0.33rem;
     &:hover {
         border: 1px solid black;
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
                  HOME
              </NavAnchor>
          </List>
          <List >
              <NavAnchor  href="#">
                  ABOUT US
              </NavAnchor>
          </List>
          <List >
              <NavAnchor  href="#">
                  OUR TEAM
              </NavAnchor>
          </List>
      </Ul>
  )
}


export default   NavLink;