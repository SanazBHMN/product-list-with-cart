// import components
import { TotalOrder } from "./TotalOrder";
// import icons
import orderConfirmed from "../assets/icons/icon-order-confirmed.svg";
// import types
import { Product } from "../types";

interface ModalProps {
  modalCartList: Product[];
  order: Record<number, number>;
  totalCost: number;
}

export const Modal = ({ modalCartList, order, totalCost }: ModalProps) => {
  // TODO: Code needs to be divided into small components
  return (
    <section className="w-full">
      <img src={orderConfirmed} alt="order confirmed" />
      <p className="text-4xl font-bold my-2">Order Confirmed</p>
      <small className="text-sm text-rose-500">
        We hope you enjoy your food!
      </small>
      <ul className="bg-rose-100 py-3 px-6 mt-8 rounded-md">
        {modalCartList.map((item) => (
          <li
            key={item.id}
            className="w-full flex justify-start gap-3 border-b-2 py-5"
          >
            <img
              className="w-14 h-14 rounded-md"
              src={item.image.thumbnail}
              alt={item.name}
            />
            <div className="w-full flex justify-between items-center">
              <div>
                <p className="text-rose-900 font-semibold wor">{item.name}</p>
                <p className="">
                  <span className="text-primary font-bold mr-2">
                    x{order[item.id]}
                  </span>{" "}
                  <span>@ {item.price.toFixed(2)}</span>
                </p>
              </div>
              <span className="text-rose-900 font-semibold">
                ${(order[item.id] * item.price).toFixed(2)}
              </span>
            </div>
          </li>
        ))}
        <TotalOrder total={totalCost} styles="my-5" />
      </ul>
    </section>
  );
};
