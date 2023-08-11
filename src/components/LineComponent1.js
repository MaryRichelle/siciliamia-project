import styled from "styled-components";

const LineDivRoot = styled.div`
  position: relative;
  border-top: 0.5px solid var(--color-chocolate-200);
  box-sizing: border-box;
  width: 323.5px;
  height: 0.5px;
`;
const LineComponent1 = () => {
  return <LineDivRoot />;
};

export default LineComponent1;
