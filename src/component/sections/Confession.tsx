import styled from "styled-components";
import { ConfessionList } from "./ConfessionList";
import {SectionCon, PrevButton, SectionTitle, ConfessionCon,NextButton,  TestifierImg, Singletest, Testimony, TestifierName, TestifierOccupation } from "../styles/ConfessionStyle";

const scrollleft = () => {
    let TestCon = document.getElementById("container") as HTMLDivElement;

    TestCon.scrollLeft += 200;
}
const scrollright = () => {
    let TestCon = document.getElementById("container") as HTMLDivElement;

    TestCon.scrollLeft -= 200;
}

const Confession  = () => {
    return(
        <SectionCon>
            <SectionTitle >What are people saying about Us </SectionTitle>
            <NextButton   onClick={scrollleft}/>
            <PrevButton  onClick={scrollright}/>

        <ConfessionCon  id="container">
               {ConfessionList.map((list, index)  =>{
                   return(
                    <Singletest  key={index} >
                    <TestifierImg   src={list.image} />
                     <Testimony>{list.confession}</Testimony>
                     <TestifierName> {list.name}</TestifierName>
                     <TestifierOccupation>{list.occupation}</TestifierOccupation>
                      </Singletest>
                   )

               })}
              
        </ConfessionCon>
        </SectionCon>
    )
}

export default Confession