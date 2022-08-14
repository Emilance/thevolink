import styled from "styled-components";
import {AiOutlineArrowRight, AiOutlineArrowLeft}  from "react-icons/ai"

export  const TestifierImg = styled.img`
width:7rem;
height :7rem;
border-radius: 50%;
border:2px solid green;
`
export  const Singletest = styled.div`
border:1px dotted black;
margin: 0.5rem;
padding:0.5rem;
color: #000000ce;


`
export  const Testimony = styled.p`
 font-size: 0.8rem;
`

export const SectionTitle = styled.h1`
    

`
export  const TestifierName = styled.p`
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
 margin:0.6rem;
`

export  const TestifierOccupation = styled.p`
margin:0.5rem;
min-width:13rem;
`

export  const SectionCon = styled.div`
   margin: 2rem 0;
   padding:2rem 0;
   display: flex ;
   flex-direction: column;
   width: 100%;
   align-items: center;
   justify-content: center;
   position: relative;
   background-color: #e7dfdf37;
`
export  const ConfessionCon = styled.div`
margin-top: 2rem;
display: flex ;
overflow: hidden;
scroll-behavior: smooth;
width: 83%;
justify-content: flex-start;
align-items: center;

`
export  const NextButton = styled(AiOutlineArrowRight)`
background-color: #9abd9a;

width:2rem;
height: 3rem;
border-radius:10px;
border:2px solid black;
position: absolute;
top:50%;
right:1.2rem;
cursor: pointer;
&:hover{
    box-shadow: 3px 3px 3px black;
    background-color: #70c970;

}

`
export  const PrevButton = styled(AiOutlineArrowLeft)`

background-color: #9abd9a;
left:1.2rem;
width:2rem;
height: 3rem;
border-radius:10px;
border:2px solid black;
position: absolute;
top:50%;
right:1.2rem;
cursor: pointer;
&:hover{
    box-shadow: 3px 3px 3px black;
    background-color: #70c970;

}


`
