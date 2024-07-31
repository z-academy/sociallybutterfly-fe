import styled from "styled-components";
import mitMediaLabLogo from "./assets/images/socially-butterfly-logo.jpg";

const Title = styled.h1``;

const SubTitle = styled.p`
  margin: 20px 60px;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 960px;
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
  margin-top: 100px;
`;

export default function App() {
  return (
    <Container>
      <Logo src={mitMediaLabLogo} alt="Socially Butterfly Logo" />
      <Title>SociallyButterfly: PoC</Title>
      <SubTitle>
        <i>Effortless and engaging in-person networking.</i>
      </SubTitle>
    </Container>
  );
}
