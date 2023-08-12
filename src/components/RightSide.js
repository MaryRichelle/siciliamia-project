import styled from "styled-components";
import React from 'react'
import RelatedStory from './RelatedStory'
import GroupComponent from './GroupComponent'
import GroupComponent1 from './GroupComponent1'
import GroupComponent2 from './GroupComponent2'
import GroupComponent3 from './GroupComponent3'
import GroupComponent4 from './GroupComponent4'
import GroupComponent11 from './GroupComponent11'
import UniqueExperiences from './UniqueExperiences'
import CardBest from "./CardBest"
import CardBest1 from "./CardBest1"
import CardBest2 from "./CardBest2"
import SeeMore from "./SeeMore"
const Container = styled.div`
margin-top: 15px;
display: flex; 
flex-direction: column;
align-items:center;
gap: 15px;
` 
function RightSide() {
  return (
    <Container>
      <RelatedStory />
      <GroupComponent />
      <GroupComponent1/>
      <GroupComponent2/>
      <GroupComponent3/>
      <GroupComponent4/>
      <GroupComponent11/>
      <UniqueExperiences />
      < CardBest/>
      < CardBest1/>
      < CardBest2/>
      <SeeMore />
    </Container>
  )
}

export default RightSide