import styled from "styled-components";
import FooterSection3 from "./FooterSection3";
import FooterSection from "./FooterSection";

const TripadvisorReviews = styled.div`
  position: absolute;
  top: 0rem;
  left: 1.88rem;
  line-height: 2.25rem;
  display: flex;
  align-items: center;
  width: 35.38rem;
  height: 3.13rem;
`;
const ClarityangleLineIcon = styled.img`
  position: absolute;
  top: 3.06rem;
  left: 44.81rem;
  width: 1.56rem;
  height: 1.56rem;
  overflow: hidden;
`;
const ClarityangleLineIcon1 = styled.img`
  position: absolute;
  top: 3.06rem;
  left: 0rem;
  width: 1.56rem;
  height: 1.56rem;
  overflow: hidden;
`;
const IntersectIcon = styled.img`
  position: relative;
  width: 1.69rem;
  height: 1.69rem;
`;
const ClarityangleLineParent = styled.div`
  position: absolute;
  top: 4.13rem;
  left: 0rem;
  width: 46.38rem;
  height: 7.81rem;
`;
const TaReviewsRoot = styled.div`
  position: relative;
  width: 100%;
  height: 11.94rem;
  text-align: left;
  font-size: var(--font-size-17xl);
  color: var(--color-chocolate-100);
  font-family: var(--font-lato);
`;
const TAReviews = () => {
  return (
    <TaReviewsRoot>
      <TripadvisorReviews>TripAdvisor reviews</TripadvisorReviews>
      <ClarityangleLineParent>
        <ClarityangleLineIcon alt="" src="/clarityangleline2.svg" />
        <ClarityangleLineIcon1 alt="" src="/clarityangleline3.svg" />
        <FooterSection3 />
        <FooterSection
          ninaHanderson="Nina Handerson"
          showNinaHanderson
          ninaHandersonAccentColor="inherit"
        />
        <FooterSection
          ninaHanderson="Daniela Xavier"
          propLeft="31.06rem"
          showNinaHanderson
          ninaHandersonAccentColor="unset"
        />
        <IntersectIcon alt="" src="/intersect6.svg" />
        <IntersectIcon alt="" src="/intersect7.svg" />
      </ClarityangleLineParent>
    </TaReviewsRoot>
  );
};

export default TAReviews;
