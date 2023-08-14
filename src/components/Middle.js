import styled from "styled-components";
import React from 'react'
import HowToGet from "./HowToGet"
import LoremIpsumDolor from "./LoremIpsumDolor"
import History2 from "./History2";
import TonnarotiMattanzaFavignanaT1 from "./TonnarotiMattanzaFavignanaT1"
import DidYouKnow1 from "./DidYouKnow1";
import LineComponent4 from "./LineComponent4"
import SeeAlsoTheContainer from "./SeeAlsoTheContainer"
import WhatsHot1 from "./WhatsHot1"
import GroupComponent13 from "../pages/GroupComponent13"
import PopularExperiences from "../pages/PopularExperiences"
import QuickFacts from '../pages/QuickFacts'
import SomethingIncorrectIn from './SomethingIncorrectIn'
import SuggestAnEdit from "./SuggestAnEdit"

const Main = styled.main`
display : flex;
flex-direction: column;
gap: 20px
`;

function Middle() {
  return (
    <Main>
      <HowToGet />
      <LoremIpsumDolor />
      <History2 />
      <TonnarotiMattanzaFavignanaT1 />
      <LoremIpsumDolor />
      <LoremIpsumDolor />
      <DidYouKnow1 />
      <LoremIpsumDolor />
      <LoremIpsumDolor />
      <LineComponent4 />
      <SeeAlsoTheContainer />
      <LineComponent4 />
      <WhatsHot1 />
      <LoremIpsumDolor />
      <GroupComponent13 />
      <PopularExperiences />
      <QuickFacts />
      <SomethingIncorrectIn />
      <SuggestAnEdit />
     
    </Main>
  )
}

export default Middle