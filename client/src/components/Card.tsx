import { useState } from "react";
// components
import { IconButton } from "./IconButton";
// hooks
import useSize from "../hooks/useSize";
// types
import { Product } from "../types";
// icons
import cartIcon from "../assets/icons/icon-add-to-cart.svg";
import { Button } from "./Button";

interface CardProps {
  product: Product;
}

export const Card = ({ product }: CardProps) => {
  const [order, setOrder] = useState<number>(0);
  const windowWidth = useSize();

  const productImage =
    windowWidth < 768
      ? product.image.mobile
      : windowWidth < 1024
      ? product.image.tablet
      : product.image.desktop;

  const handleButtonClick = () => {
    setOrder(order + 1);
    console.log(order);
  };

  const handleIncrement = () => {
    setOrder(order + 1);
  };

  const handleDecrement = () => {
    setOrder(order - 1);
  };

  return (
    <div>
      <img src={productImage} alt="" className="rounded-md" />
      {order === 0 ? (
        <div className="flex justify-center">
          <IconButton
            id={product.id}
            icon={cartIcon}
            text="Add to Cart"
            alt="cart"
            onClick={handleButtonClick}
          />
        </div>
      ) : (
        <div className="flex justify-center">
          <Button
            text={order}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        </div>
      )}
      <div className="mt-3 flex flex-col gap-1">
        <p className="text-rose-500 text-sm">{product.category}</p>
        <p className="text-rose-900 font-semibold">{product.name}</p>
        <p className="text-primary font-semibold text-xl">${product.price}</p>
      </div>
    </div>
  );
};
