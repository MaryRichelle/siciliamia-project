import styled from "styled-components";
import Rate1 from "./Rate1"
import Rate2 from "./Rate2"
import Rate3 from "./Rate3"
import Rate4 from "./Rate4"
import Rate41 from "./Rate41"

import React from 'react'
const RateContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
`;
const Box = styled.p`
 border-radius: var(--br-5xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-chocolate-100);
  box-sizing: border-box;
  font-size: var(--font-size-lg);
  color: var(--color-black);
  font-family: var(--font-lato);
  padding-inline: 15px;
  padding-block: 10px;
` 
function Rate() {
  return (
    <RateContainer>
      <Box>Love It</Box>
      <Box>Useful</Box>
      <Box>Want To find Out more</Box>
      <Box>Not my cup of tea</Box>
      <Box>Didn't get it</Box>
    </RateContainer>
  )
}

export default Rate