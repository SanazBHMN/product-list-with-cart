// components
import { IconButton } from "./IconButton";
// hooks
import useSize from "../hooks/useSize";
// types
import { Product } from "../types";
// icons
import cartIcon from "../assets/icons/icon-add-to-cart.svg";

interface CardProps {
  product: Product;
}

export const Card = ({ product }: CardProps) => {
  const windowWidth = useSize();

  const productImage =
    windowWidth < 768
      ? product.image.mobile
      : windowWidth < 1024
      ? product.image.tablet
      : product.image.desktop;

  return (
    <div>
      <img src={productImage} alt="" className="rounded-md" />
      <div className="flex justify-center">
        <IconButton icon={cartIcon} text="Add to Cart" alt="cart" />
      </div>
      <div className="mt-3 flex flex-col gap-1">
        <p className="text-rose-500 text-sm">{product.category}</p>
        <p className="text-rose-900 font-semibold">{product.name}</p>
        <p className="text-primary font-semibold text-xl">${product.price}</p>
      </div>
    </div>
  );
};
