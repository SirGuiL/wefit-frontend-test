import { Container, IconContainer, ButtonText } from "./styles";
import { ButtonProps } from "./types";

export function Button({ text, type, icon, onClick, cartQty }: ButtonProps) {
  return (
    <Container type={type} onClick={onClick}>
      {icon && (
        <IconContainer>
          <img src={icon} />
          {cartQty}
        </IconContainer>
      )}

      <ButtonText>{text}</ButtonText>
    </Container>
  );
}
