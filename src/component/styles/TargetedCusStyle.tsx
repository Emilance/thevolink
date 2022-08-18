import styled from "styled-components";


type Imagetype = {
    variant:string;
}

export const Container = styled.div`
  
    color : white;
    display:  flex;
    height: 40rem;
    background-color: #008000ba;
    @media (max-width:860px) {
    height:70rem;
    flex-direction: column;

   }
    
`
export const  RightTextCon = styled.div`
    flex:1;
    height: 100%;
  
    
`
export const LeftImgCon =  styled.div`
    flex:1;
    height:100%;
    position: relative;
   

 
`
export const Title = styled.h1`
     font-size:2.5rem;
     margin-top: 3rem;
`
export const Paragraph = styled.p`
     width: 60%;
     margin:auto;
     text-align: start;
     margin-top: 2rem;
     display :flex;
     justify-content: space-between;
     align-items: center;
     @media (max-width:860px) {
        width: 80%;
     }
`
export const Text = styled.p`
     width:90%;
`
export const Image = styled.img`
    height: 20rem;
    width: 20rem;
    position: absolute;
    top:50%;
    left:50%;
    margin-top:${(props:Imagetype) => props.variant ==='outline' ? '-16rem': '-5rem'};
    margin-left:${(props:Imagetype) => props.variant ==='outline' ? '-16rem': '-5rem'};
    border:2px solid white;

    @media (max-width:860px) {
        height: 13rem;
        width: 13rem;
        margin-top:${(props:Imagetype) => props.variant ==='outline' ? '-10rem': '-3rem'};
        margin-left:${(props:Imagetype) => props.variant ==='outline' ? '-10rem': '-3rem'};

   }

    
`

