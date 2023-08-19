
import styled from "styled-components";

const FourOptionsChild = styled.div`
  position: absolute;
  top: 6.13px;
  left: 6px;
  border-radius: var(--br-smi);
  background-color: var(--color-navajowhite);
  width: 247px;
  height: 92px;
`;
const StartingTime = styled.p`
  margin: 0;
  font-weight: 900;
`;
const Flexible = styled.p`
  margin: 0;
  font-weight: 300;
`;
const StartingTimeFlexible = styled.div`
  position: absolute;
  top: 14px;
  left: 40px;
  line-height: 144%;
  display: inline-block;
  width: 68px;
  height: 32px;
`;
const Duration5To15Container = styled.div`
  position: absolute;
  top: 58px;
  left: 40px;
  line-height: 144%;
  display: inline-block;
  width: 106px;
  height: 32px;
`;
const AvailabilityWholeYear = styled.div`
  position: absolute;
  top: 14px;
  left: 166px;
  line-height: 144%;
  display: inline-block;
  width: 68px;
  height: 32px;
`;
const PersonalGuideYes = styled.div`
  position: absolute;
  top: 58px;
  left: 166px;
  line-height: 144%;
  display: inline-block;
  width: 77px;
  height: 32px;
`;
const InfoIcon = styled.img`
  position: absolute;
  top: 22px;
  left: 20px;
  width: 16px;
  height: 16px;
  overflow: hidden;
`;
const ClockIcon = styled.img`
  position: absolute;
  top: 66px;
  left: 19px;
  width: 16px;
  height: 16px;
  overflow: hidden;
`;
const CalendarIcon = styled.img`
  position: absolute;
  top: 22px;
  left: 146px;
  width: 16px;
  height: 16px;
  overflow: hidden;
`;
const UsersIcon = styled.img`
  position: absolute;
  top: 65px;
  left: 146px;
  width: 16px;
  height: 16px;
  overflow: hidden;
`;
const FourOptionsRoot = styled.div`
  position: relative;
  width: 253px;
  height: 98px;
  margin-top: -168px;
  text-align: left;
  font-size: 11.39px;
  color: var(--color-black);
  font-family: var(--font-lato);
  margin-top: ${(p) => p.flexibleMarginTop};
`;
const BottomFooter ({ flexibleMarginTop }) => {
  return (
    <FourOptionsRoot flexibleMarginTop={flexibleMarginTop}>
      <FourOptionsChild />
      <StartingTimeFlexible>
        <StartingTime>Starting time</StartingTime>
        <Flexible>Flexible</Flexible>
      </StartingTimeFlexible>
      <Duration5To15Container>
        <StartingTime>Duration</StartingTime>
        <Flexible>5 to 15 days</Flexible>
      </Duration5To15Container>
      <AvailabilityWholeYear>
        <StartingTime>Availability</StartingTime>
        <Flexible>Whole year</Flexible>
      </AvailabilityWholeYear>
      <PersonalGuideYes>
        <StartingTime>Personal Guide</StartingTime>
        <Flexible>Yes</Flexible>
      </PersonalGuideYes>
      <InfoIcon alt="" src="/info.svg" />
      <ClockIcon alt="" src="/clock.svg" />
      <CalendarIcon alt="" src="/calendar.svg" />
      <UsersIcon alt="" src="/users.svg" />
    </FourOptionsRoot>
  );
};

export default BottomFooter;
