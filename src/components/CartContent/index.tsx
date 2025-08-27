import { useNavigate } from "react-router-dom";

import NothingHereImage from "../../assets/nothing-here.svg";
import FinishImage from "../../assets/finish.svg";

import { CartContentProps } from "./types";
import { ButtonType } from "../Button/types";

import {
  Separator,
  TotalContainer,
  TotalPrice,
  ButtonContainer,
  CartHeader,
  CartHeaderItem,
  IconSpace,
  Footer,
} from "./styles";
import { ProductCart } from "../ProductCart";
import { Button } from "../Button";
import { NothingHere } from "../NothingHere";

export const CartContent = ({
  isFinished,
  cart,
  handleFinishOrder,
}: CartContentProps) => {
  const navigate = useNavigate();

  const backButton = (
    <Button
      text="VOLTAR"
      type={ButtonType.PRIMARY}
      onClick={() => navigate("/")}
    />
  );

  if (isFinished) {
    return (
      <NothingHere
        button={backButton}
        imagePath={FinishImage}
        title="Compra realizada com sucesso!"
        isFinishScreen
      />
    );
  }

  if (cart.length === 0) {
    return (
      <NothingHere
        button={backButton}
        imagePath={NothingHereImage}
        title="Parece que não há nada por aqui :("
      />
    );
  }

  return (
    <>
      <CartHeader>
        <CartHeaderItem>
          <span>PRODUTO</span>
        </CartHeaderItem>

        <CartHeaderItem>
          <span>QTD</span>
        </CartHeaderItem>

        <CartHeaderItem>
          <span>SUBTOTAL</span>
        </CartHeaderItem>

        <IconSpace />
      </CartHeader>

      {cart.map((product) => (
        <ProductCart
          image={product.image}
          price={product.price}
          title={product.title}
          id={product.id}
          quantity={product.quantity}
          key={product.id}
        />
      ))}

      <Separator />

      <Footer>
        <TotalContainer>
          <span>TOTAL</span>

          <TotalPrice>
            {cart
              .reduce(
                (total, product) => total + product.price * product.quantity,
                0
              )
              .toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
          </TotalPrice>
        </TotalContainer>

        <ButtonContainer>
          <Button
            text="FINALIZAR PEDIDO"
            type={ButtonType.PRIMARY}
            onClick={() => handleFinishOrder()}
          />
        </ButtonContainer>
      </Footer>
    </>
  );
};
