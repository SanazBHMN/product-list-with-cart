// components
import { CartItem } from "./CartItem";
// types
import { Product } from "../types";

interface CardListProps {
  cartItems: Product[];
  onRemoveItem: (productId: number) => void;
}

export const CartList = ({ cartItems, onRemoveItem }: CardListProps) => {
  console.log(cartItems);

  return (
    <ul className="w-full">
      {cartItems.map((product) => (
        <CartItem
          key={product.id}
          product={product}
          onRemoveItem={onRemoveItem}
        />
      ))}
    </ul>
  );
};
