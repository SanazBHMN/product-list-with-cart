// import components
import Image from "./Image";
// import statics
import emptyCart from "../../public/images/illustration-empty-cart.svg";

interface CartProps {
  title: string;
}

function Cart({ title }: CartProps) {
  return (
    <div className="bg-white p-5 rounded-xl">
      <h2 className="text-xl font-bold text-primary">{title} (0)</h2>
      <Image imageSource={emptyCart} altText="Empty cart illustration" />
      <p className="text-center text-Rose-500 font-bold">
        Your added items will appear here
      </p>
    </div>
  );
}

export default Cart;
