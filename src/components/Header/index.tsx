import { CartButton, Container, Title, TextsContainer } from "./styles";

import cartIcon from "../../assets/icons/cart.svg";
import { UseProducts } from "../../hooks/UseProducts";
import { useNavigate } from "react-router-dom";

export function Header() {
  const { cart } = UseProducts();
  const navigate = useNavigate();

  const handleGoToCart = () => {
    navigate("/cart");
  };

  return (
    <Container>
      <Title onClick={() => navigate("/")}>WeMovies</Title>

      <CartButton onClick={handleGoToCart}>
        <TextsContainer>
          <span>Meu carrinho</span>
          <span>{cart.length} itens</span>
        </TextsContainer>

        <img src={cartIcon} alt="Meu carrinho" />
      </CartButton>
    </Container>
  );
}
