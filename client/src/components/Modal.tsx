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
  onClose: () => void;
}

export const Modal = ({
  modalCartList,
  order,
  totalCost,
  onClose,
}: ModalProps) => {
  // TODO: Code needs to be divided into small components
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <section className="w-full">
                <img src={orderConfirmed} alt="order confirmed" />
                <p className="text-4xl font-bold my-2">Order Confirmed</p>
                <small className="text-sm text-rose-500">
                  We hope you enjoy your food!
                </small>
                <ul className="bg-rose-100 py-3 px-6 my-8 rounded-md">
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
                          <p className="text-rose-900 font-semibold wor">
                            {item.name}
                          </p>
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
              <button
                onClick={onClose}
                className="w-full bg-primary text-white font-semibold py-4 rounded-full hover:bg-rose-800"
              >
                Start New Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
