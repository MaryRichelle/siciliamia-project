import styled from "styled-components";

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
const IntersectIcon = styled.img`
  position: relative;
  width: 27px;
  height: 27px;
  mix-blend-mode: normal;
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
const VectorParentRoot = styled.div`
  position: absolute;
  top: 0px;
  left: 25px;
  width: 220px;
  height: 125px;
  text-align: left;
  font-size: var(--font-size-3xs);
  color: var(--color-black);
  font-family: var(--font-lato);
  left: ${(p) => p.propLeft};
`;
const FooterSection2 = ({ dimensionCode, propLeft }) => {
  return (
    <VectorParentRoot propLeft={propLeft}>
      <FrameChild alt="" src="./rectangle-322.svg" />
      <FrameItem alt="" src="./rectangle-325.svg" />
      <GiulioBaccoAugust30Container>
        <GiulioBacco>Giulio Bacco</GiulioBacco>
        <August302020>
          <August3020201>
            <August3020202>August 30, 2020.</August3020202>
          </August3020201>
        </August302020>
      </GiulioBaccoAugust30Container>
      <LoremIpsumDolor4>{`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut. `}</LoremIpsumDolor4>
      <IntersectIcon alt="" src={dimensionCode} />
      <FrameInner />
      <RectangleDiv />
    </VectorParentRoot>
  );
};

export default FooterSection2;
