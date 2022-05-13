import styled from "styled-components";


export  const TestifierImg = styled.img`
width:7rem;
height :7rem;
border-radius: 50%;
border:2px solid green;
`
export  const Singletest = styled.div`
width: 17rem;
margin: 0.5rem;
padding:0.5rem;

`
export  const Testimony = styled.p`
 font-size: 0.8rem;
`
export  const TestifierName = styled.p`
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
 margin:0.6rem;
`

export  const TestifierOccupation = styled.p`
margin:0.5rem;
width: 15rem;
`

export  const SectionCon = styled.div`
   margin-top: 2rem;
   display: flex ;
   width: 100%;
   justify-content: center;
   position: relative;
`
export  const ConfessionCon = styled.div`
margin-top: 2rem;
display: flex ;
overflow: scroll;
width: 83%;
justify-content: flex-start;
align-items: center;

`
export  const NextButton = styled.h1`
background-color: #419c41;

width:2rem;
height: 3rem;
border-radius:10px;
border:2px solid black;
position: absolute;
top:50%;
right:1.2rem;
&:hover{
    box-shadow: 3px 3px 3px black;
    background-color: #70c970;

}

`
export  const PrevButton = styled(NextButton)`
left:1.2rem;

`
