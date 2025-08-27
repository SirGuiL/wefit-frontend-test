import { productDTO } from "../../dtos/productDTO";

export interface HomeContentProps {
  isLoading: boolean;
  products: productDTO[];
}
