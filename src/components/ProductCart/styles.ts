import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;

  @media (min-width: 800px) {
    padding: 16px 24px;
  }
`;

export const Image = styled.img`
  width: 64px;
  height: 82px;

  @media (min-width: 800px) {
    width: 91px;
    height: 114px;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 16px;
  flex: 1;
`;

export const MovieInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const TopContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 16px;

  @media (min-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 8px;
    width: 157px;
  }
`;

export const Title = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 136.21428571429%;
  text-align: left;
  color: #2f2e41;

  flex: 1;

  @media (min-width: 800px) {
    flex: 0;
    width: 111px;
  }
`;

export const Price = styled.span`
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  line-height: 136.1875%;
  text-align: left;
  color: #2f2e41;
`;

export const RemoveButton = styled.button`
  background: transparent;
  border: 0;
  outline: none;
  padding: 0px;

  cursor: pointer;

  @media (min-width: 800px) {
    display: none;
  }
`;

export const BottomContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: space-between;

  @media (min-width: 800px) {
    flex: 1;
    justify-content: flex-start;
  }
`;

export const SubtotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 800px) {
    flex: 1;
    align-items: flex-start;
  }
`;

export const Subtotal = styled.span`
  font-family: "Open Sans", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 136.16666666667%;

  @media (min-width: 800px) {
    display: none;
  }
`;

export const RemoveButtonLargeScreen = styled.button`
  display: none;

  background: transparent;
  border: 0;
  outline: none;
  padding: 0px;

  cursor: pointer;

  @media (min-width: 800px) {
    display: block;
  }
`;
