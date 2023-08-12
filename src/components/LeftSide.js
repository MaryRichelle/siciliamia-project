import styled from "styled-components";
import JumpToChapter from "./JumpToChapter"
import HowToGet1 from "./HowToGet1"
import History1 from "./History1"
import DidYouKnow from "./DidYouKnow"
import WhatsHot from "./WhatsHot"
import PopularAttractionNearbyContainer from "./PopularAttractionNearbyContainer"
import QuickFacts1 from "./QuickFacts1"
import TripAdvisorReviews from "./TripAdvisorReviews"
import GoogleReviews from "./GoogleReviews"
import GroupComponent12 from "../pages/GroupComponent12"

const LeftLinks = styled.div`
   display:flex;
   flex-direction: column;
   gap:15px;
  gap:2;
   `

const LeftSide = () => {
  return (
    <LeftLinks>
      <JumpToChapter />
      <HowToGet1 />
      <History1 />
      <DidYouKnow />
      <WhatsHot />
      <PopularAttractionNearbyContainer />
      <QuickFacts1 />
      <TripAdvisorReviews />
      <GoogleReviews />
      <GroupComponent12 />
     
    </LeftLinks>
  )
}
export default LeftSide