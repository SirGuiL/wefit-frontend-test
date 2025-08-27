import styled from "styled-components";

type buttonProps = {
  type: "primary" | "success";
};

export const Container = styled.button<buttonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  width: 100%;

  font-family: "Open Sans", sans-serif;
  color: #ffffff;
  font-size: 0.75rem;
  line-height: 136.16666666667%;
  text-align: center;

  background: ${({ type }) => (type == "primary" ? "#009EDD" : "#039B00")};
  outline: none;
  border: 0;

  padding: 8px;
  border-radius: 4px;

  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: ${({ type }) => (type == "primary" ? "#0073a1" : "#039B00")};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3.4px;

  font-weight: 400;
`;

export const ButtonText = styled.span`
  font-weight: 700;
  white-space: nowrap;
`;
