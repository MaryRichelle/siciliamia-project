import { useCallback } from "react";
import styled from "styled-components";

const GroupChild = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  border-radius: var(--br-8xs);
  background-color: var(--color-chocolate-100);
  width: 5.69rem;
  height: 1.88rem;
`;
const History3 = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  line-height: 2.25rem;
  display: flex;
  align-items: center;
  width: 3.69rem;
  height: 0.88rem;
`;
const RectangleParentRoot = styled.div`
  position: relative;
  width: 100%;
  height: 1.88rem;
  cursor: pointer;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-white);
  font-family: var(--font-lato);
`;
const SpringGroup = () => {
  const onGroupContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='springText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <RectangleParentRoot onClick={onGroupContainerClick}>
      <GroupChild />
      <History3>Spring</History3>
    </RectangleParentRoot>
  );
};

export default SpringGroup;
