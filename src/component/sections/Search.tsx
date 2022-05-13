import { BsSearch }  from 'react-icons/bs'
import styled from 'styled-components'

const  SectionContainer = styled.div`
    height :9rem;
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;

`

export const BsButton  = styled(BsSearch)`
    color:green;
    &:hover{
         transform:scale(1.08)
    }
`
const  SearchContainer = styled.div`
    width:70%;
    display: flex;
    border: 1px solid black;
    height: 3rem;
    border-radius:4rem;
    justify-content: space-between;
    align-items: center;
    padding-left: 1rem;

`

const SearchInput = styled.input`
    flex:1;
    height: 90%;
    border: none;
    background-color: transparent;
    font-size: 1.2rem;
    &:focus{
        outline:none;
    }


`


const  Search = () => {
     return (
         <SectionContainer>


         <SearchContainer>
             <SearchInput type='text' placeholder='Search for a profile here' />
             <BsButton size='30px' style={{margin:' 2rem', cursor:'pointer'}} />
         </SearchContainer>
         </SectionContainer>
     )
} 

export default Search