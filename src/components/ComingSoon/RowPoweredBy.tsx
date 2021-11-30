import styled from "styled-components";
import CardanoIcon from "../../assets/icons/cardano-icon.svg";

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

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  height: 24px;
`;

const CardanoIconContainer = styled.div`
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 8px;
`;
  
const RowPoweredBy : React.FC = () => (
  <Container>
    <Subtitle>Powered by</Subtitle>
    <CardanoIconContainer>
      <CardanoIcon />
    </CardanoIconContainer>
  </Container>
);

export default RowPoweredBy;
