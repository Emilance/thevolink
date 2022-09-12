import styled from 'styled-components'
import {Container, RightTextCon, LeftImgCon, Title,Paragraph, Image, Text} from "../styles/TargetedCusStyle"
import {GrWorkshop}  from "react-icons/gr"
import { MdGppGood } from  "react-icons/md"
import AOS from "aos";
import { useEffect } from "react"
import "aos/dist/aos.css";


const TargetedCus = ()=> {
   useEffect(() => {
      AOS.init({duration : 800});
    }, [])
   return (
       <Container > 
            <RightTextCon >
                 <Title >Who are we Targeting ?</Title>
                 <Paragraph>
                 TheVolink is a micro job platform created with the motive of connecting vocational skilled workers to employers, we help local vocational skilled workers in Nigeria get jobs by allowing them to create a verified portfolio profile for their profession.
                </Paragraph>
                <Paragraph>
                     <GrWorkshop size="30"/>
                  <Text >
                    We are locally concern, we care about making the goal of local workers come true 
                  </Text>
                      
                    
                </Paragraph>
                <Paragraph>
                     <MdGppGood size="30"/>
                  <Text >
                    We serve as a trusted intermidiary, the word trusted made us unique and our mission  essential 
                  </Text>
                      
                    
                </Paragraph>
            </RightTextCon>
            <LeftImgCon >
                 <Image  data-aos="fade-left" variant='outline'  src='/display1.jpg' alt="" />
                 <Image data-aos="fade-right" variant=''  src='/display2.png' alt="" />
            </LeftImgCon>
       </Container>
   )
}


export default TargetedCus 