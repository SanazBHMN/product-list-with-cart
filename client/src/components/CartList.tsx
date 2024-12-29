// components
import { CartItem } from "./CartItem";
// types
import { Product } from "../types";

interface CardListProps {
  cartItems: Product[];
}

export const CartList = ({ cartItems }: CardListProps) => {
  console.log(cartItems);
  return (
    <ul className="w-full">
      {cartItems.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </ul>
  );
};
