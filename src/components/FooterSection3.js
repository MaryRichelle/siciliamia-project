import { memo } from "react";
import styled from "styled-components";

const FrameChild = styled.img`
  position: absolute;
  top: 0rem;
  left: 0rem;
  border-radius: var(--br-5xs);
  width: 13.75rem;
  height: 7.81rem;
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
  top: 1.03rem;
  left: 3.13rem;
  line-height: 144%;
  display: inline-block;
  width: 5.5rem;
  height: 2rem;
`;
const LoremIpsumDolor5 = styled.div`
  position: absolute;
  top: 4.59rem;
  left: 1rem;
  line-height: 0.81rem;
  font-weight: 300;
  display: inline-block;
  width: 10.56rem;
  height: 2.25rem;
`;
const FrameInner = styled.img`
  position: absolute;
  top: 3.53rem;
  left: 1rem;
  width: 0.75rem;
  height: 0.75rem;
`;
const GroupIcon = styled.img`
  position: absolute;
  top: 3.53rem;
  left: 1.76rem;
  width: 0.75rem;
  height: 0.75rem;
`;
const FrameChild1 = styled.img`
  position: absolute;
  top: 3.53rem;
  left: 2.51rem;
  width: 0.75rem;
  height: 0.75rem;
`;
const FrameChild2 = styled.img`
  position: absolute;
  top: 3.53rem;
  left: 3.27rem;
  width: 0.75rem;
  height: 0.75rem;
`;
const FrameChild3 = styled.img`
  position: absolute;
  top: 3.53rem;
  left: 4.03rem;
  width: 0.75rem;
  height: 0.75rem;
`;
const IntersectIcon = styled.img`
  position: relative;
  width: 1.69rem;
  height: 1.69rem;
  mix-blend-mode: normal;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 4.59rem;
  left: 12.56rem;
  background-color: var(--color-gainsboro);
  width: 0.19rem;
  height: 2.25rem;
`;
const FrameChild4 = styled.div`
  position: absolute;
  top: 4.59rem;
  left: 12.56rem;
  background-color: var(--color-darkgray);
  width: 0.19rem;
  height: 0.63rem;
`;
const VectorParentRoot = styled.div`
  position: absolute;
  top: 0rem;
  left: 1.56rem;
  width: 13.75rem;
  height: 7.81rem;
  text-align: left;
  font-size: var(--font-size-3xs);
  color: var(--color-black);
  font-family: var(--font-lato);
`;
const FooterSection3 = memo(() => {
  return (
    <VectorParentRoot>
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
      <LoremIpsumDolor5>{`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut. `}</LoremIpsumDolor5>
      <FrameInner alt="" src="/group-477.svg" />
      <GroupIcon alt="" src="/group-478.svg" />
      <FrameChild1 alt="" src="/group-479.svg" />
      <FrameChild2 alt="" src="/group-480.svg" />
      <FrameChild3 alt="" src="/group-481.svg" />
      <IntersectIcon alt="" src="/intersect5.svg" />
      <RectangleDiv />
      <FrameChild4 />
    </VectorParentRoot>
  );
});

export default FooterSection3;
