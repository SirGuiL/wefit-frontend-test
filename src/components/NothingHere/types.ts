import { ReactNode } from "react";

export interface NothingHereProps {
  title: string;
  button: ReactNode;
  imagePath: string;
  isFinishScreen?: boolean;
}

export interface ImageContainerProps {
  isFinishScreen?: boolean;
}
