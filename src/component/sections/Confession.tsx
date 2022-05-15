import styled from "styled-components";
import { ConfessionList } from "./ConfessionList";
import {SectionCon, PrevButton, ConfessionCon,NextButton,  TestifierImg, Singletest, Testimony, TestifierName, TestifierOccupation } from "../styles/ConfessionStyle";

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
            <NextButton   onClick={scrollleft}>{'>'}</NextButton>
            <PrevButton  onClick={scrollright}>{'<'}</PrevButton>

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