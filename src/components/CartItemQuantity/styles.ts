import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;

  @media (min-width: 800px) {
    flex: 1;
  }
`;

export const Button = styled.button`
  background: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  padding: 0;

  display: flex;
`;

export const QuantityContainer = styled.div`
  height: 26px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
  border: 1px solid #d9d9d9;
`;
