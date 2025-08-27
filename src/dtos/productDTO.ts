export type productDTO = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export type productCartDTO = productDTO & {
  quantity: number;
};
