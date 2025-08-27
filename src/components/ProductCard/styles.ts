import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
  gap: 8px;

  background: #ffffff;
  border-radius: 4px;
  padding: 16px;

  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Image = styled.img`
  width: 147px;
  height: 188px;
`;

export const Title = styled.div`
  height: 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: "Open Sans", sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 100%;
    text-align: center;
    color: #333333;
  }
`;

export const Price = styled.div`
  height: 22px;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    font-weight: 700;
    line-height: 100%;
    text-align: center;
    color: #2f2e41;
  }
`;
