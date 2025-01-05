// components
import { EmptyCart } from "./EmptyCart";
import { CartList } from "./CartList";
import { DeliveryNote } from "./DeliveryNote";
// types
import { Product } from "../types";

interface CartProps {
  products: Product[] | null;
  order: Record<number, number>;
  onRemoveItem: (productId: number) => void;
}

export const Cart = ({ products, order, onRemoveItem }: CartProps) => {
  console.log("order: ", order);

  if (!products) return null;

  const cartItems = products.filter((product) => order[product.id] > 0);

  const totalItems = cartItems.reduce(
    (sum, product) => sum + order[product.id],
    0
  );
  const totalCost = cartItems.reduce(
    (sum, product) => sum + product.price * order[product.id],
    0
  );

  return (
    <div className="bg-white p-6 pb-10 flex flex-col gap-8 justify-center items-center rounded-2xl">
      <p className="text-primary font-bold text-xl self-start">
        Your Cart ({totalItems})
      </p>
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <CartList
            cartItems={cartItems}
            totalItems={totalItems}
            totalCost={totalCost}
            order={order}
            onRemoveItem={onRemoveItem}
          />
          <p className="w-full flex justify-between items-center text-rose-900">
            <span>Order Total</span>
            <span className="font-extrabold text-3xl">
              ${totalCost.toFixed(2)}
            </span>
          </p>
          <DeliveryNote />
        </>
      )}
    </div>
  );
};
