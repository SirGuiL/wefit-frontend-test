import { useState } from "react";

import { Header } from "../../components/Header";
import { CartContent } from "../../components/CartContent";
import { Container, Content } from "./styles";

import { UseProducts } from "../../hooks/UseProducts";

export function Cart() {
  const [isFinished, setIsFinished] = useState(false);

  const { cart, handleClearCart } = UseProducts();

  const handleFinishOrder = () => {
    setIsFinished(true);
    handleClearCart();
  };

  return (
    <Container>
      <Header />

      <Content>
        <CartContent
          isFinished={isFinished}
          cart={cart}
          handleFinishOrder={handleFinishOrder}
        />
      </Content>
    </Container>
  );
}
