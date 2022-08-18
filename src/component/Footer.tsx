import { NewsletterContainer, Container,RightFooter,LogoCon ,Title, Image , Input, Submit, LeftFooter,  SocialMediaIcon} from "./styles/Footerstyle"
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'
import logo   from  "../Images/TheVolink.png"



const Footer = () =>{
    return (
        <Container  >
            <LeftFooter>
                <LogoCon >

                <Image src={logo} alt=""/>
                <Title variant=''>TheVolink</Title>
                </LogoCon>
                <Title variant='outline'>Enter Your Email To Receive Updates From Us</Title>
              {/* <NewsletterContainer >
                    <Input type="email" placeholder="enter your Email" />
                    <Submit type="submit" value="subscribe" />
                    
              </NewsletterContainer> */}
              <SocialMediaIcon > 
                    <BsFacebook size="30"/>
                    <BsInstagram size="30"/>
                    <BsTwitter size="30"/>
              </SocialMediaIcon>
            </LeftFooter>
            {/* <RightFooter >
                  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae maiores, natus sequi laboriosam ab veritatis magni iusto eligendi nihil est quibusdam id distinctio quas eos? Ducimus at quidem porro voluptatibus?</p>
          
            </RightFooter> */}
        </Container>

    )
}


export default Footer