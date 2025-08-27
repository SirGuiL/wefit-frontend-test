import { productCartDTO } from "../../dtos/productDTO";

export interface CartContentProps {
  isFinished: boolean;
  cart: productCartDTO[];
  handleFinishOrder: () => void;
}
