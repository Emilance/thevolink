import styled from "styled-components"
import NavLink from "./Navlinks"

const DeskNav  = styled.div`
     
    @media (max-width:700px) {
        display: none;
    }
`


const  Navigation  = () => {
    return (
        <DeskNav>
            <NavLink/>

        </DeskNav>
    )
}

export default Navigation