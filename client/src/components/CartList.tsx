// components
import { CartItem } from "./CartItem";
// types
import { Product } from "../types";

interface CardListProps {
  cartItems: Product[];
  totalItems: number;
  totalCost: number;
  onRemoveItem: (productId: number) => void;
}

export const CartList = ({
  cartItems,
  totalItems,
  totalCost,
  onRemoveItem,
}: CardListProps) => {
  console.log(cartItems);
  console.log(totalItems);
  console.log(totalCost);

  return (
    <ul className="w-full">
      {cartItems.map((product) => (
        <CartItem
          key={product.id}
          product={product}
          totalItems={totalItems}
          totalCost={totalCost}
          onRemoveItem={onRemoveItem}
        />
      ))}
    </ul>
  );
};
