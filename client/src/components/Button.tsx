import incrementIcon from "../assets/icons/icon-increment-quantity.svg";
import decrementIcon from "../assets/icons/icon-decrement-quantity.svg";

interface ButtonProps {
  id: number;
  text: number;
  handleIncrement: (id: number) => void;
  handleDecrement: (id: number) => void;
}

export const Button = ({
  id,
  text,
  handleIncrement,
  handleDecrement,
}: ButtonProps) => {
  return (
    <div className="w-fit flex justify-between items-center gap-10 bg-primary rounded-full py-3 px-8 font-semibold text-white border border-primary relative -mt-6">
      <button
        onClick={() => handleDecrement(id)}
        className="w-5 h-5 border rounded-full flex justify-center items-center"
      >
        <img src={decrementIcon} alt="decrement" />
      </button>
      {text}
      <button
        onClick={() => handleIncrement(id)}
        className="w-5 h-5 border rounded-full flex justify-center items-center"
      >
        <img src={incrementIcon} alt="increment" />
      </button>
    </div>
  );
};
