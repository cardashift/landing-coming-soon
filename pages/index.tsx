import type { NextPage } from "next";
import styled from "styled-components";
import { CenterBlock } from "../src/components/ComingSoon/CenterBlock";
import DesktopBubbles from "../src/components/ComingSoon/DesktopBubbles";
import MobileBubbles from "../src/components/ComingSoon/MobileBubbles";
import RowPoweredBy from "../src/components/ComingSoon/RowPoweredBy";
import { TopRow } from "../src/components/ComingSoon/TopRow";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  @media (min-width: 768px) {
    justify-content: center;
  }
  @media (max-height: 701px) and (max-width: 769px) {
    overflow: scroll;
  }
`;

const PoweredByMobileContainer = styled.div`
  position: absolute;
  bottom: 32px;
  @media (min-width: 768px) {
    display: none;
  }
  @media (max-height: 769px) {
    position: relative;
    bottom: unset;
    margin-bottom: 12px
  }
`;

const ComingSoon: NextPage = () => {
  return (
    <Container>
      <TopRow />
      <CenterBlock />
      <PoweredByMobileContainer>
        <RowPoweredBy />
      </PoweredByMobileContainer>

      <DesktopBubbles />
      <MobileBubbles />
    </Container>
  );
};

export default ComingSoon;
