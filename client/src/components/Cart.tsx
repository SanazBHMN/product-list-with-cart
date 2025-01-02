// components
import { EmptyCart } from "./EmptyCart";
import { CartList } from "./CartList";
// types
import { Product } from "../types";

interface CartProps {
  products: Product[] | null;
  order: Record<number, number>;
  onRemoveItem: (productId: number) => void;
}

export const Cart = ({ products, order, onRemoveItem }: CartProps) => {
  // console.log("order: ", order);

  if (!products) return null;

  const cartItems = products.filter((product) => order[product.id] > 0);

  return (
    <div className="bg-white p-6 pb-10 flex flex-col gap-8 justify-center items-center rounded-2xl">
      <p className="text-primary font-bold text-xl self-start">
        {/* TODO: Show total number of the orders */}
        Your Cart ({cartItems.length})
      </p>
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <CartList cartItems={cartItems} onRemoveItem={onRemoveItem} />
      )}
    </div>
  );
};
