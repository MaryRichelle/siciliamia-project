import styled from "styled-components";

const VectorIcon = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const FaSolidfireRoot = styled.div`
  position: relative;
  width: 100%;
  height: 1.69rem;
  overflow: hidden;
`;
const FaSolidfire = () => {
  return (
    <FaSolidfireRoot>
      <VectorIcon alt="" src="/vector6.svg" />
    </FaSolidfireRoot>
  );
};

export default FaSolidfire;
