import styled from "styled-components";

export const Container = styled.header`
  padding: 24px 16px 24px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 136.2%;
  text-align: left;
  color: #ffffff;

  cursor: pointer;
`;

export const CartButton = styled.button`
  background: transparent;
  border: 0;
  outline: none;

  display: flex;
  align-items: center;
  gap: 8px;

  cursor: pointer;

  span {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;

    &:first-child {
      font-size: 0.875rem;
      line-height: 136.21428571429%;
      color: #ffffff;
    }

    &:last-child {
      font-size: 0.75rem;
      line-height: 136.16666666667%;
      color: #999999;
    }
  }

  img {
    width: 40px;
    height: 40px;
  }
`;

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 800px) {
    span:first-child {
      display: none;
    }
  }
`;
