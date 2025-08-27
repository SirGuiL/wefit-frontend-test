import styled from "styled-components";
import { ImageContainerProps } from "./types";

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
  line-height: 100%;
  text-align: center;
  color: #2f2e41;
`;

export const ButtonContainer = styled.div`
  width: 173px;

  button {
    height: 40px;
  }
`;

export const ImageContainer = styled.div<ImageContainerProps>`
  @media (max-width: 800px) {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: ${({ isFinishScreen }) =>
        isFinishScreen ? "auto" : "178.62840270996094px"};
      height: 265.36041259765625px;
      object-fit: cover;
      object-position: center;
    }
  }
`;
