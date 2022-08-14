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
    height: 2rem;
    margin:0.8rem 0 ;

     
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
    flex:0.7;
    display: grid ;
    align-content: center;
`

export const SocialMediaIcon = styled.div`
    display: flex;
    color:white;
    justify-content: space-around;
    margin : 2 


`

export const RightFooter =styled.div`
    flex:2.5;

`

export const  Title  = styled.p`
     font-weight: 600;
     font-size:${(props:TitleType) => props.variant =="outline" ? '1.5rem' :'1.2rem' } 1.5rem;
     color: white;
     margin:0.3rem;
`
export const Image = styled.img`
    width:4rem ;
    height:4rem ;

`

export   const LogoCon = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

`