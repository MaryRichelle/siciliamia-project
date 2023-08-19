import { memo } from "react";
import styled from "styled-components";

const TopAttractionIn = styled.b`
  position: absolute;
  height: 6.68%;
  top: 0%;
  left: 35.64%;
  font-size: var(--font-size-17xl);
  line-height: 50px;
  display: inline-block;
  color: var(--color-black);
  text-align: left;
  mix-blend-mode: normal;
`;
const LosAngeles = styled.b`
  position: relative;
  line-height: 108%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 92.75px;
  height: 46px;
  flex-shrink: 0;
  text-shadow: 0px 4.172674655914307px 10.43px rgba(0, 0, 0, 0.3);
`;
const Deal1 = styled.div`
  position: absolute;
  top: 99px;
  left: 4.41px;
  border-radius: 4.64px;
  width: 222px;
  height: 182px;
  display: flex;
  flex-direction: column;
  padding: 62.00001907348633px 64.42040252685547px;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-end;
  background-image: url("/deal3@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;
const VectorIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 7.69px;
  height: 27.86px;
`;
const FrameChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #fc8233;
  width: 152.5px;
  height: 23.21px;
`;
const StartingTomorrow = styled.div`
  position: absolute;
  top: 0.68px;
  left: 12px;
  letter-spacing: 0.01em;
  display: flex;
  align-items: center;
  width: 135px;
  height: 20px;
`;
const VectorParent = styled.div`
  position: absolute;
  top: 112.32px;
  left: -3px;
  width: 152.5px;
  height: 27.86px;
  text-align: left;
  font-size: 16.25px;
`;
const LosAngeles1 = styled.b`
  position: relative;
  line-height: 108%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 141px;
  height: 98px;
  flex-shrink: 0;
  text-shadow: 0px 4.172674655914307px 10.43px rgba(0, 0, 0, 0.3);
`;
const Deal11 = styled.div`
  position: absolute;
  top: 99px;
  left: 255px;
  border-radius: 4.64px;
  width: 222px;
  height: 182px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("/deal4@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;
const LosAngeles2 = styled.b`
  position: relative;
  line-height: 108%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 143px;
  height: 99px;
  flex-shrink: 0;
  text-shadow: 0px 4.172674655914307px 10.43px rgba(0, 0, 0, 0.3);
`;
const Deal2 = styled.div`
  position: absolute;
  top: 99px;
  left: 506px;
  border-radius: 4.64px;
  width: 222px;
  height: 182px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("/deal5@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;
const LosAngeles3 = styled.b`
  position: relative;
  line-height: 108%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 71px;
  flex-shrink: 0;
  text-shadow: 0px 4.172674655914307px 10.43px rgba(0, 0, 0, 0.3);
`;
const Deal3 = styled.div`
  position: absolute;
  top: 99px;
  left: 757px;
  border-radius: 4.64px;
  width: 222px;
  height: 182px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("/deal6@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;
const Deal4 = styled.div`
  position: absolute;
  top: 99px;
  left: 1008px;
  border-radius: 4.64px;
  width: 222px;
  height: 182px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("/deal6@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;
const ViewAll2 = styled.div`
  position: relative;
  line-height: 60px;
  font-weight: 600;
  mix-blend-mode: normal;
`;
const ViewAllChild = styled.img`
  position: relative;
  width: 6px;
  height: 11px;
`;
const ViewAll1 = styled.div`
  width: 79px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 11px;
`;
const ViewAll = styled.div`
  position: absolute;
  top: 287px;
  left: 1167px;
  width: 79px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  font-size: var(--font-size-mid);
  color: var(--color-darkorange-100);
  font-family: var(--font-inter);
`;
const DividerIcon = styled.img`
  position: absolute;
  height: 0.58%;
  width: 20.22%;
  top: 13.73%;
  right: 39.88%;
  bottom: 85.69%;
  left: 39.9%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const TopAttraRoot = styled.div`
  position: relative;
  width: 1257px;
  height: 347px;
  text-align: center;
  font-size: var(--font-size-5xl);
  color: var(--color-white);
  font-family: var(--font-lato);
`;
const TopAttra = memo(() => {
  return (
    <TopAttraRoot>
      <TopAttractionIn>Top Attraction in Sicily</TopAttractionIn>
      <Deal1>
        <LosAngeles>Mount Etna</LosAngeles>
      </Deal1>
      <VectorParent>
        <VectorIcon alt="" src="/vector5.svg" />
        <FrameChild />
        <StartingTomorrow>Starting tomorrow</StartingTomorrow>
      </VectorParent>
      <Deal11>
        <LosAngeles1>The Cathedral of Monreale</LosAngeles1>
      </Deal11>
      <Deal2>
        <LosAngeles2>The Valley of Temples in Agrigento</LosAngeles2>
      </Deal2>
      <Deal3>
        <LosAngeles3>Church Mosaics in Palermo</LosAngeles3>
      </Deal3>
      <Deal4>
        <LosAngeles3>Church Mosaics in Palermo</LosAngeles3>
      </Deal4>
      <ViewAll>
        <ViewAll1>
          <ViewAll2>View all</ViewAll2>
          <ViewAllChild alt="" src="/vector-1.svg" />
        </ViewAll1>
      </ViewAll>
      <DividerIcon alt="" src="/divider1.svg" />
    </TopAttraRoot>
  );
});

export default TopAttra;
