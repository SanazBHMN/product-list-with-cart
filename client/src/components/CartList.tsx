// components
import { CartItem } from "./CartItem";
// types
import { Product } from "../types";

interface CardListProps {
  cartItems: Product[];
  order: Record<number, number>;
  onRemoveItem: (productId: number) => void;
}

export const CartList = ({ cartItems, order, onRemoveItem }: CardListProps) => {
  return (
    <ul className="w-full">
      {cartItems.map((product) => (
        <CartItem
          key={product.id}
          product={product}
          order={order}
          onRemoveItem={onRemoveItem}
        />
      ))}
    </ul>
  );
};
