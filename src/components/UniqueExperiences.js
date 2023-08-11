import styled from "styled-components";

const UniqueExperiencesRoot = styled.div`
  position: relative;
  font-size: var(--font-size-3xl);
  line-height: 36px;
  font-weight: 600;
  font-family: var(--font-lato);
  color: var(--color-chocolate-100);
  text-align: left;
  display: flex;
  align-items: center;
  width: 304px;
  height: 14px;
`;
const UniqueExperiences = () => {
  return <UniqueExperiencesRoot>Unique experiences</UniqueExperiencesRoot>;
};

export default UniqueExperiences;
