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
    <div className="">
      <div>
        <img src={productImage} alt="" className="rounded-md" />
        <IconButton icon={cartIcon} text="Add to Cart" alt="cart" />
        <p>{product.category}</p>
        <p>{product.name}</p>
        <p>${product.price}</p>
      </div>
    </div>
  );
};
