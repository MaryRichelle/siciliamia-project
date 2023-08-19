import { memo } from "react";
import styled from "styled-components";
import FooterSection2 from "./FooterSection2";

const GoogleReviews = styled.div`
  position: absolute;
  top: 0px;
  left: 30px;
  line-height: 36px;
  display: flex;
  align-items: center;
  width: 566px;
  height: 50px;
`;
const ClarityangleLineIcon = styled.img`
  position: absolute;
  top: 49px;
  left: 717px;
  width: 25px;
  height: 25px;
  overflow: hidden;
`;
const ClarityangleLineIcon1 = styled.img`
  position: absolute;
  top: 49px;
  left: 0px;
  width: 25px;
  height: 25px;
  overflow: hidden;
`;
const FrameChild = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-5xs);
  width: 220px;
  height: 125px;
`;
const FrameItem = styled.img`
  position: absolute;
  top: -20px;
  left: -20px;
  border-radius: var(--br-5xs);
  width: 260px;
  height: 165px;
`;
const GiulioBacco = styled.p`
  margin: 0;
  font-weight: 900;
`;
const August3020202 = styled.span``;
const August3020201 = styled.span`
  font-weight: 300;
`;
const August302020 = styled.p`
  margin: 0;
  font-size: var(--font-size-5xs);
`;
const GiulioBaccoAugust30Container = styled.div`
  position: absolute;
  top: 16.5px;
  left: 50px;
  line-height: 144%;
  display: inline-block;
  width: 88px;
  height: 32px;
`;
const LoremIpsumDolor5 = styled.div`
  position: absolute;
  top: 73.5px;
  left: 16px;
  line-height: 13px;
  font-weight: 300;
  display: inline-block;
  width: 169px;
  height: 36px;
`;
const FrameInner = styled.div`
  position: absolute;
  top: 73.5px;
  left: 201px;
  background-color: var(--color-gainsboro);
  width: 3px;
  height: 36px;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 73.5px;
  left: 201px;
  background-color: var(--color-darkgray);
  width: 3px;
  height: 10px;
`;
const VectorParent = styled.div`
  position: absolute;
  top: 0px;
  left: 497px;
  width: 220px;
  height: 125px;
`;
const IntersectIcon = styled.img`
  position: relative;
  width: 27px;
  height: 27px;
`;
const ClarityangleLineParent = styled.div`
  position: absolute;
  top: 66px;
  left: 0px;
  width: 742px;
  height: 125px;
  font-size: var(--font-size-3xs);
  color: var(--color-black);
`;
const VectorIcon = styled.img`
  position: absolute;
  height: 6.11%;
  width: 1.57%;
  top: 64.4%;
  right: 92.9%;
  bottom: 29.49%;
  left: 5.53%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon1 = styled.img`
  position: absolute;
  height: 6.11%;
  width: 1.57%;
  top: 64.4%;
  right: 61.1%;
  bottom: 29.49%;
  left: 37.33%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon2 = styled.img`
  position: absolute;
  height: 6.11%;
  width: 1.57%;
  top: 64.4%;
  right: 29.29%;
  bottom: 29.49%;
  left: 69.14%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon3 = styled.img`
  position: absolute;
  height: 6.11%;
  width: 1.57%;
  top: 64.4%;
  right: 91.15%;
  bottom: 29.49%;
  left: 7.28%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon4 = styled.img`
  position: absolute;
  height: 6.11%;
  width: 1.57%;
  top: 64.4%;
  right: 89.4%;
  bottom: 29.49%;
  left: 9.03%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon5 = styled.img`
  position: absolute;
  height: 6.11%;
  width: 1.57%;
  top: 64.4%;
  right: 87.65%;
  bottom: 29.49%;
  left: 10.78%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon6 = styled.img`
  position: absolute;
  height: 6.11%;
  width: 1.57%;
  top: 64.4%;
  right: 85.89%;
  bottom: 29.49%;
  left: 12.53%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon7 = styled.img`
  position: absolute;
  height: 6.11%;
  width: 1.57%;
  top: 64.4%;
  right: 59.34%;
  bottom: 29.49%;
  left: 39.08%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon8 = styled.img`
  position: absolute;
  height: 6.11%;
  width: 1.57%;
  top: 64.4%;
  right: 57.59%;
  bottom: 29.49%;
  left: 40.84%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon9 = styled.img`
  position: absolute;
  height: 6.11%;
  width: 1.57%;
  top: 64.4%;
  right: 55.84%;
  bottom: 29.49%;
  left: 42.59%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon10 = styled.img`
  position: absolute;
  height: 6.11%;
  width: 1.57%;
  top: 64.4%;
  right: 54.09%;
  bottom: 29.49%;
  left: 44.34%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon11 = styled.img`
  position: absolute;
  height: 6.11%;
  width: 1.57%;
  top: 64.4%;
  right: 27.54%;
  bottom: 29.49%;
  left: 70.89%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon12 = styled.img`
  position: absolute;
  height: 6.11%;
  width: 1.57%;
  top: 64.4%;
  right: 25.79%;
  bottom: 29.49%;
  left: 72.64%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon13 = styled.img`
  position: absolute;
  height: 6.11%;
  width: 1.57%;
  top: 64.4%;
  right: 24.03%;
  bottom: 29.49%;
  left: 74.39%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon14 = styled.img`
  position: absolute;
  height: 6.11%;
  width: 1.57%;
  top: 64.4%;
  right: 22.28%;
  bottom: 29.49%;
  left: 76.15%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const GReviewsChild = styled.img`
  position: absolute;
  height: 6.28%;
  width: 1.58%;
  top: 43.46%;
  right: 37.37%;
  bottom: 50.26%;
  left: 61.05%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const GReviewsItem = styled.img`
  position: absolute;
  height: 6.28%;
  width: 1.58%;
  top: 43.46%;
  right: 69.17%;
  bottom: 50.26%;
  left: 29.25%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const GReviewsInner = styled.img`
  position: absolute;
  height: 6.28%;
  width: 1.58%;
  top: 43.46%;
  right: 5.56%;
  bottom: 50.26%;
  left: 92.86%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const GReviewsRoot = styled.div`
  position: relative;
  width: 742px;
  height: 191px;
  text-align: left;
  font-size: var(--font-size-17xl);
  color: var(--color-chocolate-100);
  font-family: var(--font-lato);
`;
const GReviews = memo(() => {
  return (
    <GReviewsRoot>
      <GoogleReviews>Google reviews</GoogleReviews>
      <ClarityangleLineParent>
        <ClarityangleLineIcon alt="" src="/clarityangleline.svg" />
        <ClarityangleLineIcon1 alt="" src="/clarityangleline1.svg" />
        <FooterSection2 dimensionCode="/intersect.svg" />
        <FooterSection2 dimensionCode="/intersect1.svg" propLeft="261px" />
        <FooterSection2 dimensionCode="/intersect2.svg" propLeft="261px" />
        <VectorParent>
          <FrameChild alt="" src="/rectangle-322.svg" />
          <FrameItem alt="" src="/rectangle-325.svg" />
          <GiulioBaccoAugust30Container>
            <GiulioBacco>Giulio Bacco</GiulioBacco>
            <August302020>
              <August3020201>
                <August3020202>August 30, 2020.</August3020202>
              </August3020201>
            </August302020>
          </GiulioBaccoAugust30Container>
          <LoremIpsumDolor5>{`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut. `}</LoremIpsumDolor5>
          <FrameInner />
          <RectangleDiv />
        </VectorParent>
        <IntersectIcon alt="" src="/intersect3.svg" />
        <IntersectIcon alt="" src="/intersect4.svg" />
      </ClarityangleLineParent>
      <VectorIcon alt="" src="/vector.svg" />
      <VectorIcon1 alt="" src="/vector.svg" />
      <VectorIcon2 alt="" src="/vector.svg" />
      <VectorIcon3 alt="" src="/vector.svg" />
      <VectorIcon4 alt="" src="/vector1.svg" />
      <VectorIcon5 alt="" src="/vector.svg" />
      <VectorIcon6 alt="" src="/vector.svg" />
      <VectorIcon7 alt="" src="/vector.svg" />
      <VectorIcon8 alt="" src="/vector1.svg" />
      <VectorIcon9 alt="" src="/vector.svg" />
      <VectorIcon10 alt="" src="/vector.svg" />
      <VectorIcon11 alt="" src="/vector.svg" />
      <VectorIcon12 alt="" src="/vector1.svg" />
      <VectorIcon13 alt="" src="/vector.svg" />
      <VectorIcon14 alt="" src="/vector.svg" />
      <GReviewsChild alt="" src="/group-487.svg" />
      <GReviewsItem alt="" src="/group-489.svg" />
      <GReviewsInner alt="" src="/group-487.svg" />
    </GReviewsRoot>
  );
});

export default GReviews;
