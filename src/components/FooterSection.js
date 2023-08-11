import styled from "styled-components";

const LosAngeles = styled.b`
  position: absolute;
  top: 6.05rem;
  left: 1.8rem;
  line-height: 108%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9.81rem;
  height: 2.12rem;
  text-shadow: 0px 4.172674655914307px 10.43px rgba(0, 0, 0, 0.3);
  top: ${(p) => p.mapPinIconTop};
`;
const LosAngeles1 = styled.b`
  position: absolute;
  top: 7.66rem;
  left: 1.8rem;
  font-size: var(--font-size-3xs);
  line-height: 108%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9.81rem;
  height: 2.12rem;
  text-shadow: 0px 4.172674655914307px 10.43px rgba(0, 0, 0, 0.3);
`;
const LosAngeles2 = styled.b`
  position: absolute;
  top: 9.48rem;
  left: 1.8rem;
  font-size: var(--font-size-xs);
  line-height: 108%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9.79rem;
  height: 1.04rem;
  text-shadow: 0px 4.172674655914307px 10.43px rgba(0, 0, 0, 0.3);
`;
const MapPinIcon = styled.img`
  position: absolute;
  top: 8.13rem;
  left: 0.86rem;
  width: 0.94rem;
  height: 0.94rem;
  overflow: hidden;
  left: ${(p) => p.propLeft};
`;
const PhoneCallIcon = styled.img`
  position: absolute;
  top: 9.59rem;
  left: 3.16rem;
  width: 0.94rem;
  height: 0.94rem;
  overflow: hidden;
`;
const DealRoot = styled.div`position: absolute;
  top: 38.38rem;
  left: 15rem;
  border-radius: 4.64px;
  width: 13.75rem;
  height: 14.88rem;
  background-image: url("/public/deal@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  text-align: center;
  font-size: var(--font-size-3xl);
  color: var(--color-white);
  font-family: var(--font-lato);
  left: ${(p) => p.losAngelesLeft}
  background-image: ${(p) => p.losAngelesBackgroundImage}
`;
const FooterSection1 = ({
  restaurantName,
  address,
  phoneNumber,
  locationCode,
  venueDimensions,
  losAngelesLeft,
  losAngelesBackgroundImage,
  mapPinIconTop,
  propLeft,
}) => {
  return (
    <DealRoot
      losAngelesLeft={losAngelesLeft}
      losAngelesBackgroundImage={losAngelesBackgroundImage}
    >
      <LosAngeles mapPinIconTop={mapPinIconTop}>{restaurantName}</LosAngeles>
      <LosAngeles1>{address}</LosAngeles1>
      <LosAngeles2>{phoneNumber}</LosAngeles2>
      <MapPinIcon alt="" src={locationCode} propLeft={propLeft} />
      <PhoneCallIcon alt="" src={venueDimensions} />
    </DealRoot>
  );
};

export default FooterSection1;
