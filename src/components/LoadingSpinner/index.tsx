import { Spinner } from "./styles";

import LoadSpinner from "../../assets/load-spinner.png";

export function LoadingSpinner() {
  return <Spinner src={LoadSpinner} draggable={false} alt="Loading..." />;
}
