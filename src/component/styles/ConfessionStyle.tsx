import styled from "styled-components";
import {AiOutlineArrowRight, AiOutlineArrowLeft}  from "react-icons/ai"

export  const TestifierImg = styled.img`
width:4rem;
height :4rem;
border-radius: 50%;
border:2px solid  #e7dfdf37;
`
export  const Singletest = styled.div`

margin: 0.5rem;
padding:0.5rem;
color: #000000ce;
border-radius: 1.5rem;



`
export  const Testimony = styled.p`
 font-size: 0.8rem;
 margin:0;
 width: 15rem;
`

export const SectionTitle = styled.h1`
    font-size: 1.9rem;
    max-width: 90vw;

`
export  const TestifierName = styled.p`
 margin:0.2rem 0.6rem;
 font-weight: 500;
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

@media (max-width:600px) {
    overflow-x: scroll;
    width: 88%;
}

`
export  const NextButton = styled(AiOutlineArrowRight)`
background-color: #9abd9a;
color: white;
padding: 0.5rem;
width: 1rem;
height: 1rem;
border-radius: 50%;
border:2px solid #a1a1a1;
position: absolute;
top:50%;
right:1.2rem;
cursor: pointer;
&:hover{
    background-color: #70c970;

}

@media (max-width:600px) {
   
}

`
export  const PrevButton = styled(AiOutlineArrowLeft)`

background-color: #9abd9a;
left:1.2rem;
color: white;
padding: 0.5rem;
width: 1rem;
height: 1rem;
border-radius: 50%;
border:2px solid  #a1a1a1;
position: absolute;
top:50%;
right:1.2rem;
cursor: pointer;
&:hover{
    background-color: #70c970;

}
@media (max-width:600px) {
   
}


`
