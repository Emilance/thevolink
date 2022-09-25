import { useState } from 'react'
import styled from 'styled-components'

const Container =styled.div`
    position:fixed;
    top:1rem;
    left:50%;
    width: 10rm;
`
const Select = styled.select`
    width: 6rem;
    height: 2.5rem;
    border-radius: 7px;
    cursor: pointer;
    padding: 10px;
    outline: none;
  
    border: 3px dotted black;
    background-color: transparent;

`

const Option = styled.option`
    cursor: pointer;
     font-size: 1rem;

`

const LandDropDown = () => {
   

   const changeHandler = (e : any) => {
    localStorage.setItem('lang', e.target.value)
    window.location.reload()

   }

    return (
          <Container>
           <Select onChange={e => changeHandler(e)} value="lang" >
            <Option value="English">English</Option>
            <Option value="Yoruba">Yoruba</Option>
            <Option value="Igbo">Igbo</Option>
           </Select>
          </Container>
    )
}

export default LandDropDown