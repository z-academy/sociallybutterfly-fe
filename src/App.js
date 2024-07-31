import React, { useState } from "react";
import styled from "styled-components";
import mitMediaLabLogo from "./assets/images/socially-butterfly-logo.jpg";
import axios from "axios";

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
  align-items: flex-start;

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

const TextAreaName = styled.textarea`
  width: 100%;
  height: 15px;
  margin: 10px 0;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
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

const DisplayContainer = styled.div`
  width: 45%;
  padding: 20px;
  margin: auto 0;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  line-height: 1.5em;
  white-space: pre-wrap;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const RowContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
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
  const [displayInfo, setDisplayInfo] = useState({
    profile1: "",
    profile2: "",
  });

  const handleGenerate = () => {
    const payload = {
      profiles: [
        {
          name: profile1.name,
          offer: profile1.offer,
          lookingFor: profile1.lookingFor,
        },
        {
          name: profile2.name,
          offer: profile2.offer,
          lookingFor: profile2.lookingFor,
        },
      ],
    };

    // Make the API call using axios
    axios
      .post(
        "https://8smyhjkiar.us-east-1.awsapprunner.com/api/generate_icebreaking_questions",
        payload
      )
      .then((response) => {
        const data = JSON.parse(response.data.result);
        const clean = (str) => str.replace(/^\s+|\s+$/g, "");

        const formatQuestionsAndExplanations = (questions, explanations) => {
          return questions
            .map(
              (q, index) =>
                `Question: ${q.trim()}\nExplanation: ${explanations[
                  index
                ].trim()}`
            )
            .join("\n\n");
        };

        setDisplayInfo({
          profile1: `Similarities: ${
            data.similarities
          }\n\n${formatQuestionsAndExplanations(
            clean(data["iceBreakingQuestions (profile 1 to profile 2)"]),
            clean(data["explanations (profile 1 to profile 2)"].trim())
          )}`,
          profile2: `Similarities: ${
            data.similarities
          }\n${formatQuestionsAndExplanations(
            clean(data["iceBreakingQuestions (profile 2 to profile 1)"].trim()),
            clean(data["explanations (profile 2 to profile 1)"].trim())
          )}`,
        });
      })
      .catch((error) => {
        console.error("Error generating icebreaking questions:", error);
      });
  };

  return (
    <Container>
      <Logo src={mitMediaLabLogo} alt="Socially Butterfly Logo" />
      <Title>SociallyButterfly: PoC</Title>
      <SubTitle>
        <i>Effortless and engaging in-person networking.</i>
      </SubTitle>
      <RowContainer>
        <ProfilesContainer>
          <ProfileContainer>
            <ProfileTitle>Profile 1</ProfileTitle>
            <TextAreaName
              placeholder="Name"
              value={profile1.name}
              onChange={(e) =>
                setProfile1({ ...profile1, name: e.target.value })
              }
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
          {displayInfo.profile1 && (
            <DisplayContainer>{displayInfo.profile1}</DisplayContainer>
          )}
        </ProfilesContainer>
      </RowContainer>
      <Button onClick={handleGenerate}>Break the ice!</Button>
      <RowContainer>
        <ProfilesContainer>
          <ProfileContainer>
            <ProfileTitle>Profile 2</ProfileTitle>
            <TextAreaName
              placeholder="Name"
              value={profile2.name}
              onChange={(e) =>
                setProfile2({ ...profile2, name: e.target.value })
              }
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
          {displayInfo.profile2 && (
            <DisplayContainer>{displayInfo.profile2}</DisplayContainer>
          )}
        </ProfilesContainer>
      </RowContainer>
    </Container>
  );
}
