import  { BannerImgList } from  './BannerImgList'
import { BannerContainer,BannerText,ButtonContainer,  BannerImg, Hero, Button, HeroSubtitle, HeroTitle} from '../styles/Global'
import { useEffect, useState } from 'react'


const Banner = ()=> {
    const [counter, setCounter]  =  useState(0)

    useEffect(() =>{
          setTimeout(()=> {

       (counter === BannerImgList.length-1) ? setCounter(0)  :  setCounter(counter + 1);

           
        }, 4000)
       return clearTimeout()
    }, [counter])
    return(


    <BannerContainer>
        <BannerText>
            <HeroTitle> ONLY PROFICIENT PROFESIONALS</HeroTitle>
            <HeroSubtitle>Bridging the gap between vocational workers and employers</HeroSubtitle>
        <ButtonContainer>
            
                <Button variant='outline'>READ MORE</Button>
            <Button variant=''>DROP A MESSAGE</Button>
            </ButtonContainer>
        </BannerText>
        <BannerImg>
            {BannerImgList.map((imgList, index) => {
                return(
                    <Hero display={counter} key={index} position={index} src={imgList.hero} />
                )
            })}
        </BannerImg>
    </BannerContainer>
    )
}

export default Banner