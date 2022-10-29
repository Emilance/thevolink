import styled from "styled-components"
import display1  from '../../Images/display5.jpg'
import display2  from '../../Images/display1.jpg'
import display3  from '../../Images/display2.png'
import display4  from '../../Images/display3.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react"

type  Titletype = {
   variant:string;
}

const DSectionCon = styled.div`
  
        margin:2rem 2rem 4rem 2rem;
      

`

const SectionCon = styled.div`
         display:flex;
        margin:6rem 2rem 4rem 2rem;
        align-items:center ;
        justify-content: center;
@media (max-width:860px) {
        flex-direction: column;

   }
`
const DisplayCon = styled.div`
 
       height: 30rem;
       transition: 1s all ease;
       overflow: hidden;
       border-radius: 2rem;
       width :30rem;     
       @media (max-width:860px) {
           height:23rem;
           width:130%;
           display:${(prop:Titletype) => prop.variant == "outline" ? "none" : ""};
       }
  
`
const InnerD = styled.div`
      display: flex;
      transition: 1s all ease;
      border-radius: 2rem;
      height: 20rem
`
const Image = styled.img`
      width: 30rem;
      height: 30rem;
      border-radius: 2rem;
      box-shadow: 5px 5px 2px green;
    
`
const FormCon = styled.div`

     width: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
     @media (max-width:600px) {
        width: 130%;
     }

`
const Form = styled.form`
    width: 80%;

    @media (max-width:860px) {
        width: 100%;
    }
`
const Field = styled.div`
     margin:1.5rem 0;
     display: flex;
     flex-direction: column;
     @media (max-width:860px) {
        margin:1.5rem 0;
    }
`
const InputLabel= styled.label`
    text-align: start;
`
const Input = styled.input`
height: 2.3rem;
padding-left: 0.3rem;
border:none;
border-bottom: 1px solid green;
outline: none;

`
const Submit = styled.input`
    width: 100%;
    color:white;
    background-color: #008000b3;
    height: 3rem;
    cursor: pointer;
    border:none;
    font-weight: 600;
 &:hover{
    
    border: 2px dotted green;
    color:green;
    background-color: transparent;
 }

  
`
const Select = styled.select`
    height: 2.3rem;
    border:none;
     border-bottom: 1px solid green;
   outline: none;
   padding-left: 0.3rem;
`
const option = styled.option`
    
`
const Title =styled.h2`
    text-align:${(prop:Titletype) => prop.variant == "outline" ? "start" : "center"};
`


const ProfileDisplay =() =>{
    const [bindex, setBindex]  = useState(0)

        
    useEffect(() => {

        AOS.init({duration : 800});
      }, [])

  const counter = ()=> {
      if(bindex < 4){
          
                    setTimeout(()=> {
                        setBindex(bindex + 1)
            
                    }, 2000)
                   
         
      }else if(bindex  == 4 ){
           setBindex(0)
        }}
        useEffect(()=> {
            counter()
            
 }, [bindex])
    
    return (

          <DSectionCon >
              <Title variant=''>ARE WE FOR YOU ?</Title>
              <SectionCon>

              <DisplayCon   variant="" >
                  <InnerD    style={{ transform :`translateX(${-30 * bindex}rem)`}} >

                  <Image src={display1}  alt="profiles"/>
                  <Image src={display2}  alt="profiles"/>
                  <Image src={display3}  alt="profiles"/>
                  <Image src={display4}  alt="profiles"/>
                  </InnerD>
              </DisplayCon>
              <FormCon>
                  <Form   id="joinus"  >
                        <Title  variant='outline' >Join Our WaitList</Title>
                       <Field  data-aos="fade-up"
                       data-aos-duration="3000">
                       <InputLabel>Select User</InputLabel>
                       <Select>
                       <option></option>
                       <option>Looking Forward to employ</option>
                       <option>Looking Forward to be Employed</option>
                       </Select>
                       </Field>
                       <Field  data-aos="fade-up"
                        data-aos-duration="1000">
                       <InputLabel>Name</InputLabel>
                       <Input type='text'/>
                       </Field>
                       <Field  data-aos="fade-up"
                        data-aos-duration="1000">
                       <InputLabel>Phone</InputLabel>
                       <Input type='number'/>
                       </Field>
                       <Field data-aos="fade-up"
                       data-aos-duration="1000">
                       <InputLabel>Email</InputLabel>
                       <Input type='email'/>
                       </Field>
                       <Field data-aos="fade-up"
                      data-aos-duration="1000">

                       <Submit type="submit"/>
                       </Field>
                  </Form>
              </FormCon>
              
              <DisplayCon  variant="outline" >
                  <InnerD    style={{ transform :`translateX(${-30 * bindex}rem)`}} >

                  <Image src={display1}  alt="profiles"/>
                  <Image src={display2}  alt="profiles"/>
                  <Image src={display3}  alt="profiles"/>
                  <Image src={display4}  alt="profiles"/>
                  </InnerD>
              </DisplayCon>
              </SectionCon>
          </DSectionCon>
          
    )
}


export default ProfileDisplay

