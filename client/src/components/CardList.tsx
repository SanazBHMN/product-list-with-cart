import { Card } from "./Card";
// import types
import { Product } from "../types";

interface CardListProps {
  products: Product[];
}

export const CardList = ({ products }: CardListProps) => {
  return (
    <ul>
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </ul>
  );
};
