import { useEffect } from "react";

import { UseProducts } from "../../hooks/UseProducts";

import { Header } from "../../components/Header";
import { HomeContent } from "../../components/HomeContent";
import { Container, HomeContainer } from "./styles";

export function Home() {
  const { products, isLoading, getProducts } = UseProducts();

  useEffect(() => {
    const handleGetProducts = async () => {
      getProducts();
    };

    handleGetProducts();
  }, [getProducts]);

  return (
    <Container>
      <Header />

      <HomeContainer>
        <HomeContent isLoading={isLoading} products={products} />
      </HomeContainer>
    </Container>
  );
}
