import styled from "styled-components";

const VectorIcon = styled.img`
  position: absolute;
  height: 100%;
  width: 2.5%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 97.5%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Link5 = styled.div`
  position: absolute;
  width: 3.43%;
  top: calc(50% - 12.5px);
  left: 83.49%;
  line-height: 24px;
  font-weight: 500;
  display: inline-block;
`;
const Link1 = styled.div`
  position: absolute;
  width: 22.11%;
  top: calc(50% - 12px);
  left: 77.89%;
  line-height: 24px;
  font-weight: 900;
  display: inline-block;
`;
const Link2 = styled.div`
  position: absolute;
  width: 14.45%;
  top: calc(50% - 12px);
  left: 56.5%;
  line-height: 24px;
  font-weight: 900;
  display: inline-block;
`;
const Link3 = styled.div`
  position: absolute;
  width: 23.12%;
  top: calc(50% - 12px);
  left: 27.17%;
  line-height: 24px;
  font-weight: 900;
  display: inline-block;
`;
const Link4 = styled.div`
  position: absolute;
  width: 22.69%;
  top: calc(50% - 12px);
  left: 0%;
  line-height: 24px;
  font-weight: 900;
  display: inline-block;
`;
const Link1Parent = styled.div`
  position: absolute;
  top: 1px;
  left: 0px;
  width: 692px;
  height: 24px;
`;
const FrameChild = styled.img`
  position: absolute;
  top: 4px;
  left: 1015px;
  width: 19px;
  height: 20.06px;
`;
const FrameItem = styled.img`
  position: absolute;
  top: 2.96px;
  left: 770px;
  width: 96px;
  height: 22.08px;
`;
const FrameInner = styled.img`
  position: absolute;
  top: 13px;
  left: 942px;
  width: 11px;
  height: 6px;
`;
const VectorParent = styled.div`
  position: absolute;
  top: 25px;
  left: 253px;
  width: 1078px;
  height: 27px;
`;
const Rectangle = styled.div`
  position: absolute;
  top: 58px;
  left: 241px;
  background-color: var(--color-gray-300);
  width: 40px;
  height: 1px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
  opacity: 0.5;
`;
const Rectangle1 = styled.div`
  position: absolute;
  top: 58px;
  left: 420px;
  background-color: var(--color-gray-300);
  width: 40px;
  height: 1px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
  opacity: 0.5;
`;
const Rectangle2 = styled.div`
  position: absolute;
  top: 58px;
  left: 624px;
  background-color: var(--color-gray-300);
  width: 40px;
  height: 1px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
  opacity: 0.5;
`;
const Rectangle3 = styled.div`
  position: absolute;
  top: 58px;
  left: 769px;
  background-color: var(--color-gray-300);
  width: 40px;
  height: 1px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
  opacity: 0.5;
`;
const Rectangle4 = styled.div`
  position: absolute;
  top: 58px;
  left: 945px;
  background-color: var(--color-gray-300);
  width: 40px;
  height: 1px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
  opacity: 0.5;
`;
const Image13Icon = styled.img`
  position: absolute;
  top: -14px;
  left: 0px;
  width: 112px;
  height: 78px;
  object-fit: cover;
`;
const NavRoot = styled.div`
  position: relative;
  width: 1351px;
  height: 79px;
  text-align: left;
  font-size: var(--font-size-3xl);
  color: var(--color-gray-100);
  font-family: var(--font-lato);
`;
const Nav = () => {
  return (
    <NavRoot>
      <VectorParent>
        <VectorIcon alt="" src="/vector4.svg" />
        <Link5>Eng</Link5>
        <Link1Parent>
          <Link1>Best Selection</Link1>
          <Link2>Rent a car</Link2>
          <Link3>Book your tours</Link3>
          <Link4>Get a vacation</Link4>
        </Link1Parent>
        <FrameChild alt="" src="/group-10.svg" />
        <FrameItem alt="" src="/group-88.svg" />
        <FrameInner alt="" src="/vector-11.svg" />
      </VectorParent>
      <Rectangle />
      <Rectangle1 />
      <Rectangle2 />
      <Rectangle3 />
      <Rectangle4 />
      <Image13Icon alt="" src="/image-13@2x.png" />
    </NavRoot>
  );
};

export default Nav;
