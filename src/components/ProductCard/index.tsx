import { UseProducts } from "../../hooks/UseProducts";
import cartAddIcon from "../../assets/icons/cart-add.svg";

import { Button } from "../Button";
import { Container, Content, Image, Title, Price } from "./styles";

import { ProductCardProps } from "./types";
import { ButtonType } from "../Button/types";

export function ProductCard({ image, price, title, id }: ProductCardProps) {
  const { handleAddProductInCart, cart } = UseProducts();

  const productInCart = cart.find((product) => product.id === id);
  const buttonType = productInCart ? ButtonType.SUCCESS : ButtonType.PRIMARY;
  const cartQty = productInCart?.quantity || 0;

  return (
    <Container>
      <Content>
        <Image src={image} />

        <Title>
          <h1>{title}</h1>
        </Title>

        <Price>
          <span>
            {price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </Price>
      </Content>

      <Button
        text="ADICIONAR AO CARRINHO"
        type={buttonType}
        icon={cartAddIcon}
        cartQty={cartQty}
        onClick={() => handleAddProductInCart(id)}
      />
    </Container>
  );
}
