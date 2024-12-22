interface IconButtonProps {
  id: number;
  icon: string;
  text: string;
  alt?: string;
  onClick: () => void;
}

export const IconButton = ({
  id,
  icon,
  text,
  alt,
  onClick,
}: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex justify-between items-center gap-2 bg-white rounded-full py-3 px-8 font-semibold text-rose-900 border border-primary relative -mt-6 hover:text-primary"
    >
      <img src={icon} alt={alt} />
      {text}
    </button>
  );
};
