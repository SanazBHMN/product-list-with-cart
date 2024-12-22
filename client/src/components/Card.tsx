// components
import { IconButton } from "./IconButton";
// types
import {Product} from '../types'
// icons
import cartIcon from "../assets/icons/icon-add-to-cart.svg";

interface CardProps {
  product: {
    id: number;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
      thumbnail: string;
    };
    name: string;
    category: string;
    price: number;
  };
}

export const Card = ({ product }: CardProps) => {
  return (
    <div>
      <div>
        <img src={product.image.mobile} alt="" />
        <IconButton icon={cartIcon} text="Add to Cart" alt="cart" />
        <p>{product.category}</p>
        <p>{product.name}</p>
        <p>${product.price}</p>
      </div>
    </div>
  );
};
