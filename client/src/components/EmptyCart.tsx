import emptyCart from "../assets/icons/illustration-empty-cart.svg";

export const EmptyCart = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={emptyCart} alt="Empty Cart" width={150} height={150} />
      <p className="text-rose-500 font-semibold">
        Your added items will apear here
      </p>
    </div>
  );
};
