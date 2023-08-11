import styled from "styled-components";

const LoremIpsumDolor4 = styled.span``;
const Excepteur = styled.span`
  color: var(--color-chocolate-100);
`;
const LoremIpsumDolorSitAmetCo = styled.p`
  margin: 0;
`;
const LaboriosamNisiUt = styled.span`
  color: var(--color-black);
`;
const LoremIpsumDolorContainer1 = styled.span`
  line-break: anywhere;
  width: 100%;
`;
const LoremIpsumDolorContainerRoot = styled.div`
  position: relative;
  font-size: var(--font-size-lg);
  line-height: 36px;
  font-family: var(--font-lato);
  text-align: left;
  display: flex;
  align-items: center;
  width: 696px;
  height: 455px;
  color: var(--color-black);
`;
const LoremIpsumDolorContainer = () => {
  return (
    <LoremIpsumDolorContainerRoot>
      <LoremIpsumDolorContainer1>
        <LoremIpsumDolorSitAmetCo>
          <LoremIpsumDolor4>{`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `}</LoremIpsumDolor4>
          <Excepteur>Excepteur</Excepteur>
          <LoremIpsumDolor4>{` sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `}</LoremIpsumDolor4>
        </LoremIpsumDolorSitAmetCo>
        <LoremIpsumDolorSitAmetCo>&nbsp;</LoremIpsumDolorSitAmetCo>
        <LoremIpsumDolorSitAmetCo>
          <LoremIpsumDolor4>{`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam `}</LoremIpsumDolor4>
          <Excepteur>corporis suscipit</Excepteur>
          <LaboriosamNisiUt>{` laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `}</LaboriosamNisiUt>
        </LoremIpsumDolorSitAmetCo>
      </LoremIpsumDolorContainer1>
    </LoremIpsumDolorContainerRoot>
  );
};

export default LoremIpsumDolorContainer;
