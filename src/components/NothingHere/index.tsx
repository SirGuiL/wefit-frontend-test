import { Container, Title, ButtonContainer, ImageContainer } from "./styles";
import { NothingHereProps } from "./types";

export function NothingHere({ title, button, imagePath }: NothingHereProps) {
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
