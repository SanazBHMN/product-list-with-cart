import { useState } from "react";
// components
import { EmptyCart } from "./EmptyCart";
import { CartList } from "./CartList";
import { DeliveryNote } from "./DeliveryNote";
import { Modal } from "./Modal";
import { TotalOrder } from "./TotalOrder";
// types
import { Product } from "../types";

interface CartProps {
  products: Product[] | null;
  order: Record<number, number>;
  onRemoveItem: (productId: number) => void;
}

export const Cart = ({ products, order, onRemoveItem }: CartProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleModal = () => {
    setIsModalOpen(true);
    console.log(isModalOpen);
  };

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
            order={order}
            onRemoveItem={onRemoveItem}
          />
          <TotalOrder total={totalCost} />
          <DeliveryNote />
          <button
            onClick={handleModal}
            className="w-full bg-primary text-white font-semibold py-4 rounded-full hover:bg-rose-800"
          >
            Confirm Order
          </button>
          {isModalOpen && (
            <Modal
              modalCartList={cartItems}
              order={order}
              totalCost={totalCost}
            />
          )}
        </>
      )}
    </div>
  );
};
