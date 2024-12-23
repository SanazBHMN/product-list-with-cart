// components
import { EmptyCart } from "./EmptyCart";
// icons
import removeIcon from "../assets/icons/icon-remove-item.svg";

export const Cart = () => {
  return (
    <>
      <div className="bg-white p-6 pb-10 flex flex-col gap-8 justify-center items-center rounded-2xl">
        <p className="text-primary font-bold text-xl self-start">
          Your Cart (0)
        </p>
        <div className="flex flex-col gap-8 justify-center items-center">
          {/* <EmptyCart /> */}
          <ul className="flex flex-col gap-8 justify-center items-center">
            <li className="flex justify-between">
              <div>
                <p>Classic Tiramisu</p>
                <p>
                  1x <span>@ $5.50</span> <span>%5.50</span>
                </p>
              </div>
              <button>
                <img src={removeIcon} alt="" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
