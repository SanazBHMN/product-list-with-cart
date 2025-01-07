interface TotalOrderProps {
  total: number;
  styles?: string;
}

export const TotalOrder = ({ total, styles }: TotalOrderProps) => {
  return (
    <p
      className={`w-full flex justify-between items-center text-rose-900 ${styles}`}
    >
      <span>Order Total</span>
      <span className="font-extrabold text-xl">${total.toFixed(2)}</span>
    </p>
  );
};
