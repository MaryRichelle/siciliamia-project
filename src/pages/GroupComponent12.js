import styled from "styled-components";

const GroupChild = styled.div`
  position: absolute;
  top: 11.56rem;
  left: 0rem;
  border-radius: var(--br-5xs);
  background-color: var(--color-chocolate-100);
  width: 13.38rem;
  height: 3.63rem;
`;
const Search = styled.div`
  position: absolute;
  width: 61.21%;
  top: calc(50% + 79.5px);
  left: 19.63%;
  font-weight: 500;
  display: inline-block;
`;
const Mattanza2Icon = styled.img`
  position: absolute;
  top: 0rem;
  left: 0rem;
  border-radius: 1.57px 1.57px 0px 0px;
  width: 13.38rem;
  height: 5.5rem;
  object-fit: cover;
`;
const RectangleParentRoot = styled.div`
  position: relative;
  width: 100%;
  height: 15.19rem;
  text-align: center;
  font-size: var(--font-size-3xl);
  color: var(--color-white);
  font-family: var(--font-lato);
`;
const GroupComponent12 = () => {
  return (
    <RectangleParentRoot>
      <GroupChild />
      <Search>Plan your trip</Search>
      <Mattanza2Icon alt="" src="/mattanza-2@2x.png" />
    </RectangleParentRoot>
  );
};

export default GroupComponent12;
