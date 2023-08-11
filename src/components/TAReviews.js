import styled from "styled-components";
import FooterSection1 from "./FooterSection1";

const TripadvisorReviews1 = styled.div`
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
const LoremIpsumDolor4 = styled.div`
  position: absolute;
  top: 73.5px;
  left: 16px;
  line-height: 13px;
  font-weight: 300;
  display: inline-block;
  width: 169px;
  height: 36px;
`;
const FrameInner = styled.img`
  position: absolute;
  top: 56.5px;
  left: 16px;
  width: 12px;
  height: 12px;
`;
const GroupIcon = styled.img`
  position: absolute;
  top: 56.5px;
  left: 28.1px;
  width: 12px;
  height: 12px;
`;
const FrameChild1 = styled.img`
  position: absolute;
  top: 56.5px;
  left: 40.2px;
  width: 12px;
  height: 12px;
`;
const FrameChild2 = styled.img`
  position: absolute;
  top: 56.5px;
  left: 52.3px;
  width: 12px;
  height: 12px;
`;
const FrameChild3 = styled.img`
  position: absolute;
  top: 56.5px;
  left: 64.4px;
  width: 12px;
  height: 12px;
`;
const IntersectIcon = styled.img`
  position: relative;
  width: 27px;
  height: 27px;
  mix-blend-mode: normal;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 73.5px;
  left: 201px;
  background-color: var(--color-gainsboro);
  width: 3px;
  height: 36px;
`;
const FrameChild4 = styled.div`
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
  left: 25px;
  width: 220px;
  height: 125px;
`;
const IntersectIcon1 = styled.img`
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
const TaReviewsRoot = styled.div`
  position: relative;
  width: 742px;
  height: 191px;
  text-align: left;
  font-size: var(--font-size-17xl);
  color: var(--color-chocolate-100);
  font-family: var(--font-lato);
`;
const TAReviews = () => {
  return (
    <TaReviewsRoot>
      <TripadvisorReviews1>TripAdvisor reviews</TripadvisorReviews1>
      <ClarityangleLineParent>
        <ClarityangleLineIcon alt="" src="/clarityangleline2.svg" />
        <ClarityangleLineIcon1 alt="" src="/clarityangleline3.svg" />
        <VectorParent>
          <FrameChild alt="" src="/rectangle-322.svg" />
          <FrameChild alt="" src="/rectangle-322.svg" />
          <GiulioBaccoAugust30Container>
            <GiulioBacco>Giulio Bacco</GiulioBacco>
            <August302020>
              <August3020201>
                <August3020202>August 30, 2020.</August3020202>
              </August3020201>
            </August302020>
          </GiulioBaccoAugust30Container>
          <LoremIpsumDolor4>{`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut. `}</LoremIpsumDolor4>
          <FrameInner alt="" src="/group-477.svg" />
          <GroupIcon alt="" src="/group-478.svg" />
          <FrameChild1 alt="" src="/group-479.svg" />
          <FrameChild2 alt="" src="/group-480.svg" />
          <FrameChild3 alt="" src="/group-481.svg" />
          <IntersectIcon alt="" src="/intersect5.svg" />
          <RectangleDiv />
          <FrameChild4 />
        </VectorParent>
        <FooterSection1 ninaHanderson="Nina Handerson" />
        <FooterSection1 ninaHanderson="Daniela Xavier" propLeft="497px" />
        <IntersectIcon1 alt="" src="/intersect6.svg" />
        <IntersectIcon1 alt="" src="/intersect7.svg" />
      </ClarityangleLineParent>
    </TaReviewsRoot>
  );
};

export default TAReviews;
