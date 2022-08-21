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
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore assumenda architecto qui
                      inventore nesciunt, facilis deserunt cumque eveniet adipisci quam facere debitis voluptas, 
                      distinctio, odio culpa impedit nemo? Eius atque delectus rem harum illum expedita ullam consequuntur
                      , est iste dolorem.
                </Paragraph>
                <Paragraph>
                     <GrWorkshop size="30"/>
                  <Text >
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore assumenda architecto qui
                  </Text>
                      
                    
                </Paragraph>
                <Paragraph>
                     <MdGppGood size="30"/>
                  <Text >
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore assumenda architecto qui
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