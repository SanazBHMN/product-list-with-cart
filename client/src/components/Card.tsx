import cartIcon from "../assets/icons/icon-add-to-cart.svg";
import { IconButton } from "./IconButton";

export const Card = () => {
  return (
    <div>
      <div>
        <img src="" alt="" />
        <IconButton icon={cartIcon} text="Add to Cart" alt="cart" />
      </div>
    </div>
  );
};
