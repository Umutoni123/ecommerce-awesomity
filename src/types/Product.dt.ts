export type Product = {
  imageUrl: string;
  name: string;
  newPrice: number;
  oldPrice: number;
  addToCart: boolean;
  like: boolean;
};

export type ProductBlock = {
  icon: string;
  title: string;
  totalProducts: number;
  blocks: Product[];
};
