import incrementIcon from "../assets/icons/icon-increment-quantity.svg";
import decrementIcon from "../assets/icons/icon-decrement-quantity.svg";

interface ButtonProps {
  text: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
}

export const Button = ({
  text,
  handleIncrement,
  handleDecrement,
}: ButtonProps) => {
  return (
    <div className="w-fit flex justify-between items-center gap-10 bg-primary rounded-full py-3 px-8 font-semibold text-white border border-primary relative -mt-6">
      <button
        onClick={handleDecrement}
        className="w-5 h-5 border rounded-full flex justify-center items-center"
      >
        <img src={decrementIcon} alt="decrement" />
      </button>
      {text}
      <button
        onClick={handleIncrement}
        className="w-5 h-5 border rounded-full flex justify-center items-center"
      >
        <img src={incrementIcon} alt="increment" />
      </button>
    </div>
  );
};
