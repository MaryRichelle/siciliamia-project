import styled from "styled-components";

const VectorDivRoot = styled.div`
  position: relative;
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 175px;
  height: 51px;
`;
const VectorComponent = () => {
  return <VectorDivRoot />;
};

export default VectorComponent;
