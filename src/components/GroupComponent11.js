import styled from "styled-components";

const ViewAll = styled.div`
  position: absolute;
  top: 11px;
  left: 0px;
  line-height: 36px;
  display: flex;
  align-items: center;
  width: 82px;
  height: 14px;
`;
const ClarityangleLineIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 76px;
  width: 36px;
  height: 36px;
  overflow: hidden;
`;
const ViewAllParentRoot = styled.div`
  position: relative;
  width: 112px;
  height: 36px;
  text-align: left;
  font-size: var(--font-size-3xl);
  color: var(--color-chocolate-100);
  font-family: var(--font-lato);
`;
const GroupComponent11 = () => {
  return (
    <ViewAllParentRoot>
      <ViewAll>View all</ViewAll>
      <ClarityangleLineIcon alt="" src="/clarityangleline4.svg" />
    </ViewAllParentRoot>
  );
};

export default GroupComponent11;
