import addIcon from "../../assets/icons/add.svg";
import decrementIcon from "../../assets/icons/decrement.svg";
import { Button, Container, QuantityContainer } from "./styles";

type Props = {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

export function CartItemQuantity({
  quantity,
  onIncrement,
  onDecrement,
}: Props) {
  return (
    <Container>
      <Button onClick={onDecrement}>
        <img src={decrementIcon} alt="Remover item" />
      </Button>

      <QuantityContainer>
        <span>{quantity}</span>
      </QuantityContainer>

      <Button onClick={onIncrement}>
        <img src={addIcon} alt="Adicionar item" />
      </Button>
    </Container>
  );
}
