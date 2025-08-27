import { useNavigate } from "react-router-dom";

import { Button } from "../Button";
import { NothingHere } from "../NothingHere";

import NothingHereImage from "../../assets/nothing-here.svg";
import FinishImage from "../../assets/finish.svg";
import { productCartDTO } from "../../dtos/productDTO";

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

interface CartContentProps {
  isFinished: boolean;
  cart: productCartDTO[];
  handleFinishOrder: () => void;
}

export const CartContent = ({
  isFinished,
  cart,
  handleFinishOrder,
}: CartContentProps) => {
  const navigate = useNavigate();

  if (isFinished) {
    return (
      <NothingHere
        button={
          <Button text="VOLTAR" type="primary" onClick={() => navigate("/")} />
        }
        imagePath={FinishImage}
        title="Compra realizada com sucesso!"
        compact
      />
    );
  }

  if (cart.length === 0) {
    return (
      <NothingHere
        button={
          <Button text="VOLTAR" type="primary" onClick={() => navigate("/")} />
        }
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
            type="primary"
            onClick={() => handleFinishOrder()}
          />
        </ButtonContainer>
      </Footer>
    </>
  );
};
