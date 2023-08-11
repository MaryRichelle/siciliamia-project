import { Property } from "csstype";
import styled from "styled-components";

const FrameChild = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-5xs);
  width: 220px;
  height: 125px;
`;
const NinaHanderson = styled.p`
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
const NinaHandersonAugust30Container = styled.div`
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
const VectorParentRoot = styled.div`
  position: absolute;
  top: 0px;
  left: 261px;
  width: 220px;
  height: 125px;
  text-align: left;
  font-size: var(--font-size-3xs);
  color: var(--color-black);
  font-family: var(--font-lato);
  left: ${(p) => p.propLeft};
`;
const FooterSection1 = ({ ninaHanderson, propLeft }) => {
  return (
    <VectorParentRoot propLeft={propLeft}>
      <FrameChild alt="" src="/rectangle-322.svg" />
      <FrameChild alt="" src="/rectangle-322.svg" />
      <NinaHandersonAugust30Container>
        <NinaHanderson>{ninaHanderson}</NinaHanderson>
        <August302020>
          <August3020201>
            <August3020202>August 30, 2020.</August3020202>
          </August3020201>
        </August302020>
      </NinaHandersonAugust30Container>
      <LoremIpsumDolor4>{`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut. `}</LoremIpsumDolor4>
      <FrameInner alt="" src="/group-477.svg" />
      <GroupIcon alt="" src="/group-478.svg" />
      <FrameChild1 alt="" src="/group-479.svg" />
      <FrameChild2 alt="" src="/group-480.svg" />
      <FrameChild3 alt="" src="/group-481.svg" />
      <RectangleDiv />
      <FrameChild4 />
    </VectorParentRoot>
  );
};

export default FooterSection1;
