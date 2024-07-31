import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
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
  resize: none;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
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
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
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
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

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

const QuestionExplanationContainer = styled.div`
  margin: 20px 0;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  margin: 20px 0;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 2s linear infinite;
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
    similarities: "",
    iceBreakingQuestions1: [],
    explanations1: [],
    iceBreakingQuestions2: [],
    explanations2: [],
  });
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    setLoading(true);
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
        `${process.env.REACT_APP_BACKEND}/api/generate_icebreaking_questions`,
        payload
      )
      .then((response) => {
        const data = JSON.parse(response.data.result);

        setDisplayInfo({
          similarities: data?.similarities,
          iceBreakingQuestions1:
            data["iceBreakingQuestions (profile 1 to profile 2)"],
          explanations1: data["explanations (profile 1 to profile 2)"],
          iceBreakingQuestions2:
            data["iceBreakingQuestions (profile 2 to profile 1)"],
          explanations2: data["explanations (profile 2 to profile 1)"],
        });
      })
      .catch((error) => {
        console.error("Error generating icebreaking questions:", error);
      })
      .finally(() => {
        setLoading(false);
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
              disabled={loading}
            />
            <TextArea
              placeholder="What can you offer?"
              value={profile1.offer}
              onChange={(e) =>
                setProfile1({ ...profile1, offer: e.target.value })
              }
              disabled={loading}
            />
            <TextArea
              placeholder="What are you looking for?"
              value={profile1.lookingFor}
              onChange={(e) =>
                setProfile1({ ...profile1, lookingFor: e.target.value })
              }
              disabled={loading}
            />
          </ProfileContainer>
          {displayInfo.similarities && (
            <DisplayContainer>
              <div>
                <b>Similarities:</b> {displayInfo.similarities}
              </div>

              {displayInfo.iceBreakingQuestions1.map((each, idx) => (
                <QuestionExplanationContainer key={idx}>
                  <div>
                    <b>Question:</b> {each}
                  </div>
                  <div>
                    <b>Explanation:</b> {displayInfo.explanations1[idx]}
                  </div>
                </QuestionExplanationContainer>
              ))}
            </DisplayContainer>
          )}
        </ProfilesContainer>
      </RowContainer>

      {loading ? (
        <Spinner />
      ) : (
        <Button onClick={handleGenerate} disabled={loading}>
          Break the ice!
        </Button>
      )}
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
              disabled={loading}
            />
            <TextArea
              placeholder="What can you offer?"
              value={profile2.offer}
              onChange={(e) =>
                setProfile2({ ...profile2, offer: e.target.value })
              }
              disabled={loading}
            />
            <TextArea
              placeholder="What are you looking for?"
              value={profile2.lookingFor}
              onChange={(e) =>
                setProfile2({ ...profile2, lookingFor: e.target.value })
              }
              disabled={loading}
            />
          </ProfileContainer>
          {displayInfo.similarities && (
            <DisplayContainer>
              <div>
                <b>Similarities:</b> {displayInfo.similarities}
              </div>

              {displayInfo.iceBreakingQuestions2.map((each, idx) => (
                <QuestionExplanationContainer key={idx}>
                  <div>
                    <b>Question:</b> {each}
                  </div>
                  <div>
                    <b>Explanation:</b> {displayInfo.explanations2[idx]}
                  </div>
                </QuestionExplanationContainer>
              ))}
            </DisplayContainer>
          )}
        </ProfilesContainer>
      </RowContainer>
    </Container>
  );
}
