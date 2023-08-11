import styled from "styled-components";

const ImageRoot = styled.div`
  position: relative;
  border-radius: var(--br-5xs);
  width: 1328px;
  height: 466px;
  background-image: url("/public/image@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;
const Image1 = () => {
  return <ImageRoot />;
};

export default Image1;
