import { UseProducts } from "../../hooks/UseProducts";
import thrashIcon from "../../assets/icons/trash.svg";

import { CartItemQuantity } from "../CartItemQuantity";
import {
  Container,
  Image,
  Content,
  MovieInfoContainer,
  Price,
  Title,
  TopContent,
  RemoveButton,
  BottomContent,
  SubtotalContainer,
  Subtotal,
  RemoveButtonLargeScreen,
} from "./styles";

import { ProductCartProps } from "./types";

export function ProductCart({
  image,
  title,
  price,
  quantity,
  id,
}: ProductCartProps) {
  const {
    handleRemoveProductInCart,
    handleAddProductInCart,
    handleDeleteProductInCart,
  } = UseProducts();

  return (
    <Container>
      <Content>
        <Image src={image} />

        <MovieInfoContainer>
          <TopContent>
            <Title>{title}</Title>
            <Price>
              {price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </Price>

            <RemoveButton onClick={() => handleDeleteProductInCart(id)}>
              <img src={thrashIcon} alt="Remover item" />
            </RemoveButton>
          </TopContent>

          <BottomContent>
            <CartItemQuantity
              quantity={quantity}
              onIncrement={() => handleAddProductInCart(id)}
              onDecrement={() => handleRemoveProductInCart(id)}
            />

            <SubtotalContainer>
              <Subtotal>SUBTOTAL</Subtotal>

              <Price>
                {(price * quantity).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Price>
            </SubtotalContainer>

            <RemoveButtonLargeScreen
              onClick={() => handleDeleteProductInCart(id)}
            >
              <img src={thrashIcon} alt="Remover item" />
            </RemoveButtonLargeScreen>
          </BottomContent>
        </MovieInfoContainer>
      </Content>
    </Container>
  );
}
