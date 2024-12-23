import { Card } from "./Card";
// import types
import { Product } from "../types";

interface CardListProps {
  products: Product[];
  order: Record<number, number>;
  handleButtonClick: (id: number) => void;
  handleIncrement: (id: number) => void;
  handleDecrement: (id: number) => void;
}

export const CardList = ({
  products,
  order,
  handleButtonClick,
  handleIncrement,
  handleDecrement,
}: CardListProps) => {
  return (
    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      {products.map((product) => (
        <Card
          key={product.id}
          product={product}
          order={order[product.id] || 0}
          handleButtonClick={handleButtonClick}
          handleIncrement={() => handleIncrement(product.id)}
          handleDecrement={() => handleDecrement(product.id)}
        />
      ))}
    </ul>
  );
};
