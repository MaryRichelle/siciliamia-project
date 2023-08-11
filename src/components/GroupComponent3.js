import styled from "styled-components";

const GenericTitle = styled.div`
  position: absolute;
  top: 0px;
  left: 128px;
  line-height: 36px;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 163px;
  height: 14px;
`;
const LoremIpsumDolor4 = styled.div`
  position: absolute;
  top: 22px;
  left: 128px;
  font-size: var(--font-size-base);
  line-height: 21.5px;
  font-weight: 300;
  display: flex;
  align-items: center;
  width: 213px;
  height: 59px;
`;
const Download1Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-5xs);
  width: 112px;
  height: 88px;
  object-fit: cover;
`;
const GenericTitleParentRoot = styled.div`
  position: relative;
  width: 341px;
  height: 88px;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-black);
  font-family: var(--font-lato);
`;
const GroupComponent3 = () => {
  return (
    <GenericTitleParentRoot>
      <GenericTitle>Generic Title</GenericTitle>
      <LoremIpsumDolor4>{`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut  `}</LoremIpsumDolor4>
      <Download1Icon alt="" src="/download-1@2x.png" />
    </GenericTitleParentRoot>
  );
};

export default GroupComponent3;
