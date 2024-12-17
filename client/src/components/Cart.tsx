import EmptyCart from "../assets/icons/illustration-empty-cart.svg";

export const Cart = () => {
  return (
    <div className="bg-white p-6 pb-10 flex flex-col gap-8 justify-center items-center rounded-2xl">
      <p className="text-primary font-bold text-xl self-start">Your Cart (0)</p>
      <img src={EmptyCart} alt="Empty Cart" width={150} height={150} />
      <p className="text-rose-500 font-semibold">
        Your added items will apear here
      </p>
    </div>
  );
};
