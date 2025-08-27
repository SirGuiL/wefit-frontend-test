import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100dvh - 128px);
  max-height: calc(100dvh - 128px);
  border-radius: 4px;

  background: #fff;

  gap: 24px;
  overflow: hidden;

  @media (max-width: 800px) {
    padding-right: 64px;
    padding-left: 64px;
  }
`;

export const Title = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 136.2%;
  text-align: center;
  color: #2f2e41;
`;

export const ButtonContainer = styled.div`
  width: 173px;

  button {
    height: 40px;
  }
`;

export const ImageContainer = styled.div`
  @media (max-width: 800px) {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
