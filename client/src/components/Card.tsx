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
  order: number;
  handleButtonClick: (id: number) => void;
  handleIncrement: (id: number) => void;
  handleDecrement: (id: number) => void;
}

export const Card = ({
  product,
  order,
  handleButtonClick,
  handleIncrement,
  handleDecrement,
}: CardProps) => {
  const windowWidth = useSize();

  const productImage =
    windowWidth < 768
      ? product.image.mobile
      : windowWidth < 1024
      ? product.image.tablet
      : product.image.desktop;

  return (
    <li>
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
            id={product.id}
            text={order}
            handleIncrement={() => handleIncrement(product.id)}
            handleDecrement={() => handleDecrement(product.id)}
          />
        </div>
      )}
      <div className="mt-3 flex flex-col gap-1">
        <p className="text-rose-500 text-sm">{product.category}</p>
        <p className="text-rose-900 font-semibold">{product.name}</p>
        <p className="text-primary font-semibold text-xl">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </li>
  );
};
