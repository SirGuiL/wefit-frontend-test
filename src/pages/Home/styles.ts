import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const HomeContainer = styled.main`
  display: flex;
  gap: 16px;
  flex: 1;

  width: 100%;

  padding: 0px 16px;

  @media (min-width: 800px) {
    gap: 24px;
  }
`;
