import styled from "styled-components"

type  TitleType = {
    variant : string ;

}

export const Container = styled.div`
    height: 15rem;
    background-color: #00800097;
    display: flex;
    padding: 0 3rem;

    @media (max-width:860px) {
        flex-direction: column;
        height: fit-content;
    }

`
export const NewsletterContainer = styled.div`
    display: flex;
    height: 2.5rem;
    margin:0.8rem 0 ;
    width: 60%;

     
`
export const Input = styled.input`
    background-color: transparent;
    border:none;
    border: 2px solid white;
    color:white;
    outline:none;
    flex:1;
`
export const Submit = styled.input`
    border-radius: 5px;
    border:none;
  
`
export const  LeftFooter =  styled.div`
    flex:1;
    display: flex ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
`

export const SocialMediaIcon = styled.div`
    display: flex;
    color:white;
    justify-content: space-around;
    margin : 2rem ;
    width: 30%;

    @media (max-width: 600px) {
        width: 90%
    }


`

export const RightFooter =styled.div`
    flex:2.5;

`

export const  Title  = styled.p`
     font-weight: 700;
     font-size:${(props:TitleType) => props.variant =="outline" ? '1.5rem' :'1.5rem' } 1.5rem;
     color: white;
     margin:0.3rem;
     align-items: start;
`
export const Image = styled.img`
    width:4rem ;
    height:4rem ;

`

export   const LogoCon = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;

`