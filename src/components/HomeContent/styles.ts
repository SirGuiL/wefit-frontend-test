import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
  row-gap: 16px;
  overflow-x: hidden;
  align-self: flex-start;

  @media (min-width: 800px) {
    row-gap: 24px;
  }

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const SpinnerContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  padding: 40px;
`;

export const NoContentContainer = styled.div`
  flex: 1;
`;
