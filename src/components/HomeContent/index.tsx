import { productDTO } from "../../dtos/productDTO";

import { Button } from "../Button";
import { LoadingSpinner } from "../LoadingSpinner";
import { NothingHere } from "../NothingHere";
import { ProductCard } from "../ProductCard";

import { CardsContainer, NoContentContainer, SpinnerContainer } from "./styles";

import NothingHereImage from "../../assets/nothing-here.svg";

interface HomeContentProps {
  isLoading: boolean;
  products: productDTO[];
}

export const HomeContent = ({ isLoading, products }: HomeContentProps) => {
  if (isLoading) {
    return (
      <SpinnerContainer>
        <LoadingSpinner />
      </SpinnerContainer>
    );
  }

  if (products.length === 0) {
    return (
      <NoContentContainer>
        <NothingHere
          button={
            <Button
              text="Recarregar página"
              type="primary"
              onClick={() => location.reload()}
            />
          }
          imagePath={NothingHereImage}
          title="Parece que não há nada por aqui :("
        />
      </NoContentContainer>
    );
  }

  return (
    <>
      <CardsContainer>
        {products.map((product) => (
          <ProductCard
            image={product.image}
            price={product.price}
            title={product.title}
            id={product.id}
            key={product.id}
          />
        ))}
      </CardsContainer>
    </>
  );
};
