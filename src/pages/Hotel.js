import styled from "styled-components";

const Rectangle = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  border-radius: 3.14px;
  background-color: var(--color-white);
  box-shadow: 0px 3.8931150436401367px 23.36px rgba(189, 189, 189, 0.23);
  width: 13.38rem;
  height: 11.06rem;
`;
const FavignanaTunaFishing = styled.b`
  position: absolute;
  top: 6.5rem;
  left: 1.94rem;
  line-height: 144%;
  display: inline-block;
  width: 9.5rem;
  height: 1.38rem;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 13.38rem;
  height: 11.06rem;
`;
const HotelRoot = styled.div`
  position: relative;
  box-shadow: var(--shadow);
  width: 100%;
  height: 11.06rem;
  text-align: left;
  font-size: var(--font-size-3xl);
  color: var(--color-chocolate-100);
  font-family: var(--font-lato);
`;
const Hotel = () => {
  return (
    <HotelRoot>
      <RectangleParent>
        <Rectangle />
        <FavignanaTunaFishing>Favignana tuna fishing</FavignanaTunaFishing>
      </RectangleParent>
    </HotelRoot>
  );
};

export default Hotel;
