import styled from "styled-components";

export const Separator = styled.hr`
  margin: 5px 16px 21px 16px;

  @media (min-width: 800px) {
    margin: 8px 24px;
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  margin: 0 16px;

  span {
    font-family: "Open Sans", sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 136.21428571429%;
    color: #999999;
  }

  @media (min-width: 800px) {
    justify-content: center;
    gap: 5px;
    flex: 0;
  }
`;

export const TotalPrice = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 136.16666666667%;
  text-align: center;
  color: #2f2e41;
`;

export const ButtonContainer = styled.div`
  padding: 16px;

  @media (min-width: 800px) {
    padding: 16px 24px;
  }
`;

export const CartHeader = styled.div`
  display: none;

  @media (min-width: 800px) {
    display: flex;
    align-items: center;
    padding: 24px 24px 8px;
  }
`;

export const CartHeaderItem = styled.div`
  &:first-child {
    width: 280px;
  }

  &:not(:first-child) {
    flex: 1;
  }
`;

export const IconSpace = styled.div`
  width: 24px;
`;

export const Footer = styled.div`
  @media (min-width: 800px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

    button {
      width: 173px;
    }
  }
`;
