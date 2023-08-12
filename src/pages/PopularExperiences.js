import styled from "styled-components";
import FooterSection from "../components/FooterSection";

const PopularExperiencesIn = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  line-height: 2.25rem;
  display: flex;
  align-items: center;
  width: 42.5rem;
  height: 3.13rem;
`;
const BestPlaceTo = styled.div`
  position: absolute;
  top: 36.25rem;
  left: 0.56rem;
  font-size: var(--font-size-5xl);
  line-height: 2.25rem;
  display: flex;
  align-items: center;
  width: 35.38rem;
  height: 1.13rem;
`;
const LosAngeles = styled.b`
  position: absolute;
  top: 6.03rem;
  left: 1.8rem;
  line-height: 108%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9.79rem;
  height: 2.11rem;
  text-shadow: 0px 4.172674655914307px 10.43px rgba(0, 0, 0, 0.3);
`;
const LosAngeles1 = styled.b`
  position: absolute;
  top: 7.64rem;
  left: 1.8rem;
  font-size: var(--font-size-3xs);
  line-height: 108%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9.79rem;
  height: 2.11rem;
  text-shadow: 0px 4.172674655914307px 10.43px rgba(0, 0, 0, 0.3);
`;
const LosAngeles2 = styled.b`
  position: absolute;
  top: 9.46rem;
  left: 1.8rem;
  font-size: var(--font-size-xs);
  line-height: 108%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9.77rem;
  height: 1.04rem;
  text-shadow: 0px 4.172674655914307px 10.43px rgba(0, 0, 0, 0.3);
`;
const MapPinIcon = styled.img`
  position: absolute;
  top: 8.11rem;
  left: 1.07rem;
  width: 0.94rem;
  height: 0.94rem;
  overflow: hidden;
`;
const PhoneCallIcon = styled.img`
  position: absolute;
  top: 9.57rem;
  left: 3.15rem;
  width: 0.94rem;
  height: 0.94rem;
  overflow: hidden;
`;
const Deal = styled.div`
  position: absolute;
  top: 38.38rem;
  left: 0.25rem;
  border-radius: 4.64px;
  width: 13.73rem;
  height: 14.85rem;
  background-image: url("/deal2@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  text-align: center;
  font-size: var(--font-size-3xl);
  color: var(--color-white);
`;
const ViewAll1 = styled.div`
  position: relative;
  line-height: 3.75rem;
  font-weight: 600;
  mix-blend-mode: normal;
`;
const ViewAllChild = styled.img`
  position: relative;
  width: 0.38rem;
  height: 0.69rem;
`;
const ViewAll = styled.div`
  position: absolute;
  top: 35rem;
  left: 38.5rem;
  width: 4.94rem;
  height: 3.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  font-size: var(--font-size-mid);
  color: var(--color-darkorange-100);
`;
const MapsicleMapIcon = styled.img`
  position: absolute;
  top: 4.13rem;
  left: 0.25rem;
  width: 43.88rem;
  height: 29.38rem;
  object-fit: cover;
`;
const PopularExperiencesRoot = styled.div`
  position: relative;
  width: 100%;
  height: 53.25rem;
  text-align: left;
  font-size: var(--font-size-17xl);
  color: var(--color-chocolate-100);
  font-family: var(--font-lato);
`;
const PopularExperiences = () => {
  return (
    <PopularExperiencesRoot>
      <PopularExperiencesIn>Popular experiences in Sicily</PopularExperiencesIn>
      <BestPlaceTo>Best place to eat nearby</BestPlaceTo>
      <FooterSection
        losAngeles="Viri Ku C’e"
        losAngeles1=" Via Riviera Lanterna, 29, Scoglitti, Vittoria RG"
        losAngeles2=" +39 0932 980016"
        mapPin="/mappin.svg"
        phoneCall="/phonecall.svg"
      />
      <FooterSection
        losAngeles="Trattoria Piccolo Napoli"
        losAngeles1=" Piazzetta Mulino a Vento, 4, 90139 Palermo"
        losAngeles2="+39 091 320431"
        mapPin="/mappin1.svg"
        phoneCall="/phonecall1.svg"
        losAngelesLeft="29.75rem"
        losAngelesBackgroundImage={`url("/deal1@3x.png")`}
        mapPinIconTop="4.8rem"
        propLeft="0.92rem"
      />
      <Deal>
        <LosAngeles>Da Vittorio</LosAngeles>
        <LosAngeles1>Via Friuli Venezia Giulia, 9, 92013 Menfi AG</LosAngeles1>
        <LosAngeles2>+39 0925 78381</LosAngeles2>
        <MapPinIcon alt="" src="/mappin2.svg" />
        <PhoneCallIcon alt="" src="/phonecall2.svg" />
      </Deal>
      <ViewAll>
        <ViewAll1>View all</ViewAll1>
        
        <ViewAllChild alt="" src="/vector-1.svg" />
      </ViewAll>
      <MapsicleMapIcon alt="" src="/mapsicle-map@2x.png" />
    </PopularExperiencesRoot>
  );
};

export default PopularExperiences;
