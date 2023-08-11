import { Property } from "csstype";
import styled from "styled-components";

const MaskGroupIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 261px;
  height: 332px;
  object-fit: cover;
`;
const TheManyBenefits = styled.p`
  margin: 0;
`;
const TheManyBenefitsContainer = styled.b`
  position: absolute;
  top: 54.71%;
  left: 0%;
  font-size: var(--font-size-lgi);
  line-height: 30px;
  white-space: pre-wrap;
  mix-blend-mode: normal;
  white-space: ${(p) => p.propWhiteSpace};
`;
const HelaingHolidaysAreContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 71.08%;
  left: 0%;
  line-height: 26px;
  color: var(--color-slategray);
  display: inline-block;
  mix-blend-mode: normal;
`;
const ReadMore = styled.div`
  position: absolute;
  width: 100%;
  top: 93.72%;
  left: 0%;
  line-height: 28px;
  font-weight: 600;
  color: var(--color-darkorange-100);
  display: inline-block;
  mix-blend-mode: normal;
`;
const Blog01Root = styled.div`
  position: absolute;
  top: 79px;
  left: 302px;
  width: 266px;
  height: 446px;
  text-align: left;
  font-size: var(--font-size-mini);
  color: var(--color-black);
  font-family: var(--font-lato);
  left: ${(p) => p.propLeft};
`;
const CardContainer = ({
  maskGroup,
  theManyBenefitsOf,
  takingAHealingHoliday,
  propLeft,
  propWhiteSpace,
}) => {
  return (
    <Blog01Root propLeft={propLeft}>
      <MaskGroupIcon alt="" src={maskGroup} />
      <TheManyBenefitsContainer propWhiteSpace={propWhiteSpace}>
        <TheManyBenefits>{theManyBenefitsOf}</TheManyBenefits>
        <TheManyBenefits>{takingAHealingHoliday}</TheManyBenefits>
      </TheManyBenefitsContainer>
      <HelaingHolidaysAreContainer>
        <TheManyBenefits>{`‘Helaing holidays’ are on the rise `}</TheManyBenefits>
        <TheManyBenefits>
          tohelp maximise your health and happines...
        </TheManyBenefits>
      </HelaingHolidaysAreContainer>
      <ReadMore>Read more</ReadMore>
    </Blog01Root>
  );
};

export default CardContainer;
