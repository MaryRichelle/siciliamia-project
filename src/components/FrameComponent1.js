import { memo } from "react";
import styled from "styled-components";

const Type = styled.div`
  position: relative;
  line-height: 36px;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 66.57px;
  height: 17px;
  flex-shrink: 0;
`;
const Experience = styled.div`
  position: relative;
  line-height: 36px;
  color: var(--color-gray-400);
  display: flex;
  align-items: center;
  width: 98px;
  height: 17px;
  flex-shrink: 0;
`;
const TypeParent = styled.div`
  position: absolute;
  top: 16px;
  left: 24px;
  width: 98px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Destination = styled.div`
  position: relative;
  line-height: 36px;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 79px;
  height: 17px;
  flex-shrink: 0;
`;
const Favignana = styled.div`
  position: relative;
  line-height: 36px;
  color: var(--color-gray-400);
  display: flex;
  align-items: center;
  width: 79px;
  height: 17px;
  flex-shrink: 0;
`;
const DestinationParent = styled.div`
  position: absolute;
  top: 16px;
  left: 179px;
  width: 79px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const AverageRating = styled.div`
  position: relative;
  line-height: 36px;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 92px;
  height: 17px;
  flex-shrink: 0;
`;
const Div = styled.div`
  position: relative;
  line-height: 36px;
  color: var(--color-gray-400);
  display: flex;
  align-items: center;
  width: 53px;
  height: 17px;
  flex-shrink: 0;
`;
const AverageRatingParent = styled.div`
  position: absolute;
  top: 68px;
  left: 24px;
  width: 92px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const NumberOfReviews = styled.div`
  position: relative;
  line-height: 36px;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 120px;
  height: 17px;
  flex-shrink: 0;
`;
const NumberOfReviewsParent = styled.div`
  position: absolute;
  top: 68px;
  left: 179px;
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FamilyFriendly = styled.div`
  position: relative;
  line-height: 36px;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 94px;
  height: 17px;
  flex-shrink: 0;
`;
const No = styled.div`
  position: relative;
  line-height: 36px;
  color: var(--color-gray-400);
  display: flex;
  align-items: center;
  width: 49.33px;
  height: 17px;
  flex-shrink: 0;
`;
const FamilyFriendlyParent = styled.div`
  position: absolute;
  top: 16px;
  left: 541px;
  width: 94px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const HighSeasonParent = styled.div`
  position: absolute;
  top: 16px;
  left: 360px;
  width: 79px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FrameParentRoot = styled.div`
  position: relative;
  border-radius: var(--br-5xs);
  background-color: rgba(251, 143, 29, 0.1);
  width: 664px;
  height: 118px;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-black);
  font-family: var(--font-lato);
`;
const Frame1 = memo(() => {
  return (
    <FrameParentRoot>
      <TypeParent>
        <Type>Type</Type>
        <Experience>Experience</Experience>
      </TypeParent>
      <DestinationParent>
        <Destination>Destination</Destination>
        <Favignana>Favignana</Favignana>
      </DestinationParent>
      <AverageRatingParent>
        <AverageRating>Average rating</AverageRating>
        <Div>4.8</Div>
      </AverageRatingParent>
      <NumberOfReviewsParent>
        <NumberOfReviews>Number of reviews</NumberOfReviews>
        <Div>2698</Div>
      </NumberOfReviewsParent>
      <FamilyFriendlyParent>
        <FamilyFriendly>Family Friendly</FamilyFriendly>
        <No>No</No>
      </FamilyFriendlyParent>
      <HighSeasonParent>
        <Destination>High Season</Destination>
        <Div>Spring</Div>
      </HighSeasonParent>
    </FrameParentRoot>
  );
});

export default Frame1;
