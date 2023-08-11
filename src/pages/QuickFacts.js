import styled from "styled-components";

const QuickFacts11 = styled.div`
  position: absolute;
  top: 0rem;
  left: 0.31rem;
  font-size: var(--font-size-17xl);
  line-height: 2.25rem;
  color: var(--color-chocolate-100);
  display: flex;
  align-items: center;
  width: 35.38rem;
  height: 3.13rem;
`;
const QuickFactsChild = styled.div`
  position: absolute;
  top: 4.69rem;
  left: 0rem;
  border-radius: var(--br-5xs);
  background-color: var(--color-white);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  width: 43.25rem;
  height: 10.19rem;
`;
const Segestatourcom = styled.b`
  position: absolute;
  top: 9.06rem;
  left: 3.88rem;
  line-height: 144%;
`;
const B = styled.b`
  position: absolute;
  top: 12.06rem;
  left: 3.88rem;
  line-height: 144%;
`;
const IcoutlinePlaceIcon = styled.img`
  position: absolute;
  top: 5.69rem;
  left: 1rem;
  width: 2.06rem;
  height: 2.06rem;
  overflow: hidden;
`;
const ContradaBarbaroSnc = styled.b`
  position: absolute;
  top: 5.81rem;
  left: 3.88rem;
  line-height: 144%;
`;
const VectorIcon = styled.img`
  position: absolute;
  height: 9.66%;
  width: 3.32%;
  top: 62.18%;
  right: 93.64%;
  bottom: 28.15%;
  left: 3.03%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon1 = styled.img`
  position: absolute;
  height: 10.09%;
  width: 3.47%;
  top: 81.51%;
  right: 93.64%;
  bottom: 8.4%;
  left: 2.89%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const QuickFactsRoot = styled.div`
  position: relative;
  width: 100%;
  height: 14.88rem;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-black);
  font-family: var(--font-lato);
`;
const QuickFacts = () => {
  return (
    <QuickFactsRoot>
      <QuickFacts11>Quick facts</QuickFacts11>
      <QuickFactsChild />
      <Segestatourcom>segestatour.com</Segestatourcom>
      <B>+39 0924 952356</B>
      <IcoutlinePlaceIcon alt="" src="/icoutlineplace.svg" />
      <ContradaBarbaroSnc>
        Contrada Barbaro SNC, 91013 Calatafimi-Segesta, Sicilia Italia
      </ContradaBarbaroSnc>
      <VectorIcon alt="" src="/vector2.svg" />
      <VectorIcon1 alt="" src="/vector3.svg" />
    </QuickFactsRoot>
  );
};

export default QuickFacts;
