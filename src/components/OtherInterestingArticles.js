import styled from "styled-components";
import CardContainer from "./CardContainer";

const OtherInterestingArticles1 = styled.b`
  position: absolute;
  height: 8.19%;
  width: 34.87%;
  top: 0%;
  left: 33.25%;
  line-height: 50px;
  display: inline-block;
  mix-blend-mode: normal;
`;
const DividerIcon = styled.img`
  position: absolute;
  height: 0.46%;
  width: 21.67%;
  top: 9.95%;
  right: 39.07%;
  bottom: 89.6%;
  left: 39.26%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const MaskGroupIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 261px;
  height: 332px;
  object-fit: cover;
`;
const WhatToDo = styled.p`
  margin: 0;
`;
const WhatToDoContainer = styled.b`
  position: absolute;
  top: 54.71%;
  left: 0%;
  font-size: var(--font-size-lgi);
  line-height: 30px;
  mix-blend-mode: normal;
`;
const FindOutWhat = styled.div`
  position: absolute;
  width: 100%;
  top: 71.08%;
  left: 0%;
  line-height: 26px;
  color: var(--color-slategray);
  display: inline-block;
  mix-blend-mode: normal;
`;
const ReadMore = styled.div`
  position: absolute;
  width: 100%;
  top: 93.72%;
  left: 0%;
  line-height: 28px;
  font-weight: 600;
  color: var(--color-darkorange-100);
  display: inline-block;
  mix-blend-mode: normal;
`;
const Blog01 = styled.div`
  position: absolute;
  top: 79px;
  left: 0px;
  width: 266px;
  height: 446px;
  font-size: var(--font-size-mini);
`;
const OtherInterestingArticlesRoot = styled.div`
  position: relative;
  width: 1173px;
  height: 525px;
  text-align: left;
  font-size: var(--font-size-17xl);
  color: var(--color-black);
  font-family: var(--font-lato);
`;
const OtherInterestingArticles = () => {
  return (
    <OtherInterestingArticlesRoot>
      <OtherInterestingArticles1>
        Other interesting articles
      </OtherInterestingArticles1>
      <DividerIcon alt="" src="/divider.svg" />
      <Blog01>
        <MaskGroupIcon alt="" src="/mask-group@2x.png" />
        <WhatToDoContainer>
          <WhatToDo>{`What to do and where to go `}</WhatToDo>
          <WhatToDo>Sicily during covid 19?</WhatToDo>
        </WhatToDoContainer>
        <FindOutWhat>{`Find out what to do and where to go in Sicily. See the list of the top spots and activities. `}</FindOutWhat>
        <ReadMore>Read more</ReadMore>
      </Blog01>
      <CardContainer
        maskGroup="/mask-group1@2x.png"
        theManyBenefitsOf="The many benefits of  "
        takingAHealingHoliday="taking a healing holiday"
      />
      <CardContainer
        maskGroup="/mask-group2@2x.png"
        theManyBenefitsOf="Travelling italy without spea"
        takingAHealingHoliday="king any Italian"
        propLeft="604px"
        propWhiteSpace="unset"
      />
      <CardContainer
        maskGroup="/mask-group3@2x.png"
        theManyBenefitsOf="Getting a perfect sun tan in"
        takingAHealingHoliday="wonderful italian beaches"
        propLeft="907px"
        propWhiteSpace="unset"
      />
    </OtherInterestingArticlesRoot>
  );
};

export default OtherInterestingArticles;
