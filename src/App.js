import React, { useState } from "react";
import styled from "styled-components";
import mitMediaLabLogo from "./assets/images/socially-butterfly-logo.jpg";

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 0.5em;
`;

const SubTitle = styled.p`
  margin: 20px 60px;
  font-size: 1.2em;
  text-align: center;
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

const ProfilesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProfileContainer = styled.div`
  width: 45%;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const ProfileTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 0.5em;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  margin: 10px 0;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const NameInput = styled.input`
  width: 100%;
  height: 40px;
  margin: 10px 0;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  margin: 20px;
  padding: 10px 20px;
  font-size: 1em;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const DisplayArea = styled.div`
  width: 80%;
  max-width: 600px;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  font-size: 1em;
  line-height: 1.5em;
  white-space: pre-wrap;
`;

export default function App() {
  const [profile1, setProfile1] = useState({
    name: "",
    offer: "",
    lookingFor: "",
  });
  const [profile2, setProfile2] = useState({
    name: "",
    offer: "",
    lookingFor: "",
  });
  const [displayInfo, setDisplayInfo] = useState("");

  const handleGenerate = () => {
    setDisplayInfo(`
      Profile 1:
      Name: ${profile1.name}
      Offer: ${profile1.offer}
      Looking For: ${profile1.lookingFor}

      Profile 2:
      Name: ${profile2.name}
      Offer: ${profile2.offer}
      Looking For: ${profile2.lookingFor}
    `);
  };

  return (
    <Container>
      <Logo src={mitMediaLabLogo} alt="Socially Butterfly Logo" />
      <Title>SociallyButterfly: PoC</Title>
      <SubTitle>
        <i>Effortless and engaging in-person networking.</i>
      </SubTitle>
      <ProfilesContainer>
        <ProfileContainer>
          <ProfileTitle>Profile 1</ProfileTitle>
          <NameInput
            placeholder="Name"
            value={profile1.name}
            onChange={(e) => setProfile1({ ...profile1, name: e.target.value })}
          />
          <TextArea
            placeholder="What can you offer?"
            value={profile1.offer}
            onChange={(e) =>
              setProfile1({ ...profile1, offer: e.target.value })
            }
          />
          <TextArea
            placeholder="What are you looking for?"
            value={profile1.lookingFor}
            onChange={(e) =>
              setProfile1({ ...profile1, lookingFor: e.target.value })
            }
          />
        </ProfileContainer>
        <ProfileContainer>
          <ProfileTitle>Profile 2</ProfileTitle>
          <NameInput
            placeholder="Name"
            value={profile2.name}
            onChange={(e) => setProfile2({ ...profile2, name: e.target.value })}
          />
          <TextArea
            placeholder="What can you offer?"
            value={profile2.offer}
            onChange={(e) =>
              setProfile2({ ...profile2, offer: e.target.value })
            }
          />
          <TextArea
            placeholder="What are you looking for?"
            value={profile2.lookingFor}
            onChange={(e) =>
              setProfile2({ ...profile2, lookingFor: e.target.value })
            }
          />
        </ProfileContainer>
      </ProfilesContainer>
      <Button onClick={handleGenerate}>Generate</Button>
      {displayInfo && <DisplayArea>{displayInfo}</DisplayArea>}
    </Container>
  );
}
