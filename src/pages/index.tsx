import { CenterBlock } from '@/cardashift/components/ComingSoon/CenterBlock';
import DesktopBubbles from '@/cardashift/components/ComingSoon/DesktopBubbles';
import MobileBubbles from '@/cardashift/components/ComingSoon/MobileBubbles';
import RowPoweredBy from '@/cardashift/components/ComingSoon/RowPoweredBy';
import { TopRow } from '@/cardashift/components/ComingSoon/TopRow';
import type { NextPage } from 'next';
import styled from 'styled-components';

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
  @media (max-height: 767px) and (max-width: 767px) {
    overflow-y: scroll;
  }
  @media (max-width: 767px) and (max-height: 768px) {
    height: inherit;
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
    margin-bottom: 12px;
    margin-top: 36px;
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
