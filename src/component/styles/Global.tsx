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
clip-path: polygon(50% 0%, 100% 0, 100% 100%, 0 76%, 0 0);
background:radial-gradient(green, #7cd37c,white);
@media (max-width:700px) {
        height: 25rem;
        clip-path: polygon(100% 0, 100% 79%, 76% 98%, 54% 91%, 30% 100%, 0 80%, 0 0);
}

`

export const BannerText = styled.div`
   flex:1;
   margin-left: 4rem;

   @media (max-width:860px) {
    margin-left: 1rem;

   }
`
export const BannerImg = styled.div`
 flex: 1;
 margin-right: 1rem;
`
export const Hero = styled.img`
  width:20rem;
  position: absolute;
  height: 70%;
  right:10%;
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
`
export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
`


export const Button = styled.button`
height: 2rem;
width:100%;
min-width: 10rem;
border:1px solid black;
display: flex;
justify-content: center;
color:${(props:Buttontype) => props.variant ==='outline' ? '#1c1c1e': 'white'};
align-items: center;
cursor: pointer;
padding: 1.3rem;
font-size: ${(props:Buttontype) => props.variant ==='outline' ? '1rem':  "0.8rem"};
font-weight: 700;
background-color: ${(props:Buttontype) => props.variant ==='outline' ? 'transparent':  "#1c1c1e"};
&:hover{
    background-color: ${(props:Buttontype) => props.variant !=='outline' ? 'transparent':  "#1c1c1e"};
    box-shadow: 5px 5px 5px black;
    color:${(props:Buttontype) => props.variant !=='outline' ? '#1c1c1e': 'white'};

}
`

export const HeroSubtitle= styled.p`
     text-align: start;
     color:#1c1c1e;
`
export const HeroTitle= styled.h1`
  color:#1c1c1e;
  text-align: start;
  @media (max-width:860px) {
  font-size: 1.7rem;

   }
`