import { Container, Title, ButtonContainer, ImageContainer } from "./styles";
import { NothingHereProps } from "./types";

export function NothingHere({
  title,
  button,
  imagePath,
  isFinishScreen,
}: NothingHereProps) {
  return (
    <Container>
      <Title>{title}</Title>

      <ImageContainer isFinishScreen={isFinishScreen}>
        <img src={imagePath} />
      </ImageContainer>

      <ButtonContainer>{button}</ButtonContainer>
    </Container>
  );
}
