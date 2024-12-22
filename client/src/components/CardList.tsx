import { Card } from "./Card";
// import types
import { Product } from "../types";

interface CardListProps {
  products: Product[];
}

export const CardList = ({ products }: CardListProps) => {
  return (
    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </ul>
  );
};
