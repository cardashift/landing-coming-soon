import styled from "styled-components";
import CardanoShiftGrey from "../../assets/cardashift-comingsoon-grey.svg";
import CardanoShiftWhite from "../../assets/cardashift-comingsoon-white.svg";
import RowPoweredBy from "./RowPoweredBy";

const CardanoShiftWhiteMobile = styled(CardanoShiftWhite)`
  margin-top: 32px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const CardanoShiftGreyStyled = styled(CardanoShiftGrey)`
  position: absolute;
  width: 156.71px;
  height: 16px;
  left: 100px;
  top: 32px;
  @media (max-width: 769px) {
    display: none;
  }
`;

const PoweredByContainer = styled.div`
  position: absolute;
  right: 100px;
  top: 28px;
  @media (max-width: 769px) {
    display: none;
  }
`;

export const TopRow: React.FC = () => (
  <>
    <CardanoShiftWhiteMobile />
    <CardanoShiftGreyStyled />
    <PoweredByContainer>
      <RowPoweredBy />
    </PoweredByContainer>
  </>
);
