import styled from "styled-components";
import LeftSide from "./LeftSide"
import RightSide from "./RightSide"
import Middle from "./Middle"
import WhatDoYou from "./WhatDoYou"
import IllustrationsLikeThese from "./IllustrationsLikeThese"
import Component from "./Component"
import TripAdvisorReviews from "./TripAdvisorReviews"
import Rate from './Rate'
import TAReviews from "./TAReviews"
import GReviews from "./GReviews"
import OtherInterestingArticles from "./OtherInterestingArticles"
import TopAttra from "./TopAttra"
import Footer from "./Footer"
const Columns = styled.div`
margin-top: 6rem;
   display:flex;
   gap:15px;
   `;
const FlexComponent = styled.div`
display: flex;
justify-content: space-between ;
`;
const Reviews = styled.div`
display: grid;
justify-content: center;
gap:10px;
margin-block: 20px;`
const Main = () => {
  return (
    <>
      <Columns>
        <LeftSide />
        <Middle />
        <RightSide />
      </Columns>
      <FlexComponent>
        <WhatDoYou />
        <Component />
      </FlexComponent>
      <IllustrationsLikeThese />
      <Rate />
      <Reviews>
      <TripAdvisorReviews />
      <TAReviews />
      < GReviews />
      </Reviews>
      <OtherInterestingArticles />
      <TopAttra />
      <Footer />
    </>
  )
}
export default Main