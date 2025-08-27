import { Container, Title, ButtonContainer, ImageContainer } from "./styles";

import { ReactNode } from "react";

type Props = {
  title: string;
  button: ReactNode;
  imagePath: string;
  compact?: boolean;
};

export function NothingHere({ title, button, imagePath }: Props) {
  return (
    <Container>
      <Title>{title}</Title>

      <ImageContainer>
        <img src={imagePath} />
      </ImageContainer>

      <ButtonContainer>{button}</ButtonContainer>
    </Container>
  );
}
