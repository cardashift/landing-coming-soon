import styled from "styled-components";
import Cardanoshift from "../../../assets/cardashift-comingsoon.svg";
import CardanoIcon from "../../../assets/icons/cardano-icon.svg";

const Subtitle = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #4d515c;
  padding-bottom: 5px;
`;

const SubRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  position: absolute;
  height: 24px;
  right: 32px;
  top: 28px;
`;

const CardanoIconContainer = styled.div`
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 8px;
`;

const CardashiftIconContainer = styled.div`
  position: absolute;
  width: 156.71px;
  height: 16px;
  left: 32px;
  top: 32px;
`;

export const TopRow: React.FC = () => (
  <>
    <CardashiftIconContainer>
      <Cardanoshift />
    </CardashiftIconContainer>
    <SubRow>
      <Subtitle>Powered by</Subtitle>
      <CardanoIconContainer>
        <CardanoIcon />
      </CardanoIconContainer>
    </SubRow>
  </>
);
