import styled from "styled-components"
import { BsSearch }  from 'react-icons/bs'


 type Buttontype = {
     variant:string;
}

type herotype={
   display:number;
   position:number
}


 export const BannerContainer = styled.div`
display: flex;
justify-content: center;
align-items:center;
padding-top: 2rem;
height: 30rem;
color: white;
position: relative;
background:radial-gradient(green, #7cd37c,white);
@media (max-width:700px) {
        height: 25rem;
        background-image: linear-gradient(to bottom, #1f3b1f50 40%, #00000076  60%) , url('./display4.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        position: " ";
}

`

export const BannerText = styled.div`
   flex:1;
   margin-left: 4rem;
   margin-bottom: 4rem;

   @media (max-width:860px) {
    margin-left: 1rem;

   }
   @media (max-width:600px) {
     flex:none;
    width: 75%;
    margin: 0;
    margin-left:10%;
  }

`
export const BannerImg = styled.div`
 flex: 1;
 margin-right: 1rem;
`
export const Hero = styled.img`
  /* width:20rem; */
  position: absolute;
  height: 70%;
  left:65%;
  top: 20%;
  opacity: ${(props:herotype) => props.display === props.position ? "1":  "0"};
  transform:scale( ${(props:herotype) => props.display === props.position ? "1.3":  "1"});
  transition: all ease 1s;


  @media (max-width:700px) {
    width:40%;
  position: absolute;
  height: 56%;
  right:2%;
  top: 20%;
  }
  @media (max-width:600px) {
    display: none;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`


export const Button = styled.button`
height: 2rem;
width:48%;
min-width: 9rem;
border:3px dotted white;
border-radius: 20px;
display: flex;
justify-content: center;
color:${(props:Buttontype) => props.variant ==='outline' ? 'white': 'white'};
align-items: center;
cursor: pointer;
padding: 1.3rem;
font-size: ${(props:Buttontype) => props.variant ==='outline' ? '1rem':  "0.8rem"};
font-weight: 700;
background-color: ${(props:Buttontype) => props.variant ==='outline' ? 'transparent':  "#1c1c1e"};
&:hover{
    background-color: ${(props:Buttontype) => props.variant !=='outline' ? 'transparent':  "#1c1c1e"};
    box-shadow: 5px 5px 5px black;
    color:${(props:Buttontype) => props.variant !=='outline' ? 'white': 'white'};

}
@media (max-width:600px) {
  margin-left:${(props:Buttontype) => props.variant ==='outline' ? '': '0.5rem'}
}
`

export const HeroSubtitle= styled.p`
     text-align: start;
     color:white;
     font-family: Verdana, Geneva, Tahoma, sans-serif;
    
@media (max-width: 600px) {
  display:${(props:Buttontype) => props.variant ==='outline' ? 'none': ''};

}

`
export const HeroTitle= styled.h1`
  color:white;
  text-align: start;
  
  @media (max-width:860px) {
  font-size: 1.7rem;

   }
`