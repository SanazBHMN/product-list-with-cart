// types
import { Product } from "../types";
// icons
import removeIcon from "../assets/icons/icon-remove-item.svg";

interface CartItemProps {
  product: Product;
}

export const CartItem = ({ product }: CartItemProps) => {
  return (
    <li
      key={product.id}
      className="flex justify-between items-center border-b py-4"
    >
      <div>
        <p className="text-rose-900 font-semibold">{product.name}</p>
        <p className="mt-2">
          <span className="text-primary font-bold">1x</span>{" "}
          <span className="text-rose-500 mx-2">
            @ ${product.price.toFixed(2)}
          </span>{" "}
          <span className="text-rose-500 font-bold">$5.50</span>
        </p>
      </div>
      <button className="w-5 h-5 border border-rose-400 rounded-full grid place-items-center">
        <img src={removeIcon} alt="Remove Item" />
      </button>
    </li>
  );
};
