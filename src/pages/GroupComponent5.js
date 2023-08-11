import styled from "styled-components";

const GroupChild = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  border-radius: var(--br-8xs);
  background-color: var(--color-chocolate-100);
  width: 7.88rem;
  height: 1.88rem;
`;
const LowBudget = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  line-height: 2.25rem;
  display: flex;
  align-items: center;
  width: 5.88rem;
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
const GroupComponent5 = () => {
  return (
    <RectangleParentRoot>
      <GroupChild />
      <LowBudget>Low budget</LowBudget>
    </RectangleParentRoot>
  );
};

export default GroupComponent5;
