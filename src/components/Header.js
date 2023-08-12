import styled from "styled-components";
import Image1 from "./Image1"
import FrameComponent1 from "./FrameComponent1"
import RectangleComponent from './RectangleComponent';
const HeaderBottom = styled.div`
display: flex;
justify-content: space-between;
gap: 2;
`
const Header = () => {

  return (
    <>
      <Image1 />
      <HeaderBottom>
      <FrameComponent1 />
      <RectangleComponent />
      </HeaderBottom>
    </>
  )
}
export default Header
