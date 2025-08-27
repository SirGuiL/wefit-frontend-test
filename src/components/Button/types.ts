export interface ButtonProps {
  type: ButtonType;
  text: string;
  icon?: string;
  cartQty?: number;
  onClick: () => void;
}

export enum ButtonType {
  PRIMARY = "primary",
  SUCCESS = "success",
}
