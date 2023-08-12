import styled from "styled-components";
import SicilysTunaFishingContainer from "./SicilysTunaFishingContainer";

const ImageRoot = styled.div`
  position: relative;
  border-radius: var(--br-5xs);
  width: 1328px;
  height: 466px;
  
   background-image: url("./image@3x.png");
  // background: yellow;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;
const Image1 = () => {
  return <>

  <ImageRoot >

      <SicilysTunaFishingContainer />
  </ImageRoot>;
  </>
};

export default Image1;
