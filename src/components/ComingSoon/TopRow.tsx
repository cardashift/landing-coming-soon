import styled from 'styled-components';
import RowPoweredBy from './RowPoweredBy';

const CardanoShiftWhiteMobile = styled.img`
  margin-top: 32px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const CardanoShiftGreyStyled = styled.img`
  position: absolute;
  width: 156.71px;
  height: 16px;
  left: 100px;
  top: 32px;
  @media (max-width: 767px) {
    display: none;
  }
`;

const PoweredByContainer = styled.div`
  position: absolute;
  right: 100px;
  top: 28px;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const TopRow: React.FC = () => (
  <>
    <CardanoShiftWhiteMobile
      src="/icons/cardashift-comingsoon-white.svg"
      alt="Icon Cardanoshift"
    />
    <CardanoShiftGreyStyled
      src="/icons/cardashift-comingsoon-grey.svg"
      alt="Icon Cardanoshift"
    />
    <PoweredByContainer>
      <RowPoweredBy />
    </PoweredByContainer>
  </>
);
