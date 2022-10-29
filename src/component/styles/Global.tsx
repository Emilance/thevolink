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
  justify-content: center;
  z-index: 1000;
`


export const Button = styled.a`
  border: 1px solid white ; 
  padding: 0.6rem  1rem;
  position: relative;
  cursor: pointer;
  font-weight: 500;
  margin-left:1rem;
  z-index: 2;
&:hover{
  color: green;
}
&::before{
  content: "";
   position:absolute;
   background: white;
   color:#111a21;
   top: 0;
   left: 0;
   height: 100%;
   width: 100%;
  z-index: -5;
   transition:  transform 0.8s;
    transform-origin: 0 0;
   transition-timing-function:cubic-bezier(0.5,1.6,0.4,0.7); 
   transform: scaleX(0);
   color:#111a21;
}
&:hover::before{
  transform: scaleX(1)

}
@media (max-width:600px) {
  padding: 0.3rem  1rem;
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