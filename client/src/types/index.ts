export interface Product {
  id: number;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
    thumbnail: string;
  };
  name: string;
  category: string;
  price: number;
}
