import styled from "styled-components";

const SicilysTunaFishing = styled.p`
  margin-block-start: 0;
  margin-block-end: 42px;
`;
const OnDisplayAt = styled.p`
  margin: 0;
`;
const SicilysTunaFishingContainer1 = styled.span`
  line-break: anywhere;
  width: 100%;
`;
const SicilysTunaFishingContainerRoot = styled.div`
  position: relative;
  font-size: var(--font-size-17xl);
  line-height: 50px;
  font-weight: 600;
  font-family: var(--font-lato);
  color: var(--color-white);
  text-align: left;
  display: flex;
  align-items: center;
  width: 824px;
  height: 81px;
`;
const SicilysTunaFishingContainer = () => {
  return (
    <SicilysTunaFishingContainerRoot>
      <SicilysTunaFishingContainer1>
        <p>ya</p>
        <SicilysTunaFishing>{`Sicily’s Tuna Fishing Tradition `}</SicilysTunaFishing>
        <OnDisplayAt>on Display at the Tonnara di Favignana</OnDisplayAt>
      </SicilysTunaFishingContainer1>
    </SicilysTunaFishingContainerRoot>
  );
};

export default SicilysTunaFishingContainer;
