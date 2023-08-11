import styled from "styled-components";

const GroupChild = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  border-radius: var(--br-8xs);
  background-color: var(--color-chocolate-100);
  width: 5.19rem;
  height: 1.88rem;
`;
const Sailing = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  line-height: 2.25rem;
  display: flex;
  align-items: center;
  width: 3.19rem;
  height: 0.88rem;
`;
const RectangleParentRoot = styled.div`
  position: relative;
  width: 100%;
  height: 1.88rem;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-white);
  font-family: var(--font-lato);
`;
const GroupComponent9 = () => {
  return (
    <RectangleParentRoot>
      <GroupChild />
      <Sailing>Sailing</Sailing>
    </RectangleParentRoot>
  );
};

export default GroupComponent9;
