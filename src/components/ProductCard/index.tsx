import { UseProducts } from "../../hooks/UseProducts";
import { Button } from "../Button";
import cartAddIcon from "../../assets/icons/cart-add.svg";
import { Container, Content, Image, Title, Price } from "./styles";

interface Props {
  image: string;
  title: string;
  price: number;
  id: number;
}

export function ProductCard({ image, price, title, id }: Props) {
  const { handleAddProductInCart, cart } = UseProducts();

  return (
    <Container>
      <Content>
        <Image src={image} />

        <Title>{title}</Title>

        <Price>
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Price>
      </Content>

      <Button
        text="ADICIONAR AO CARRINHO"
        type={
          cart.findIndex((product) => product.id === id) !== -1
            ? "success"
            : "primary"
        }
        icon={cartAddIcon}
        cartQty={cart.find((product) => product.id === id)?.quantity || 0}
        onClick={() => handleAddProductInCart(id)}
      />
    </Container>
  );
}
