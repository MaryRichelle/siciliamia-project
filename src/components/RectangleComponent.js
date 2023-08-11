import styled from "styled-components";

const RectangleDivRoot = styled.div`
  position: relative;
  border-radius: var(--br-5xs);
  background-color: rgba(81, 131, 60, 0.1);
  width: 648px;
  height: 118px;
`;
const RectangleComponent = () => {
  return <RectangleDivRoot />;
};

export default RectangleComponent;
