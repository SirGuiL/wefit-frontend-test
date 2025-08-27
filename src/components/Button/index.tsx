import { Container, IconContainer, ButtonText } from "./styles";

type Props = {
  type: "primary" | "success";
  text: string;
  icon?: string;
  cartQty?: number;
  onClick: () => void;
};

export function Button({ text, type, icon, onClick, cartQty }: Props) {
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
