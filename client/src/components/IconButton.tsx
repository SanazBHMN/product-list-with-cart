interface IconButtonProps {
  icon: string;
  text: string;
  alt?: string;
}

export const IconButton = ({ icon, text, alt }: IconButtonProps) => {
  return (
    <button className="flex justify-between items-center gap-2 bg-white rounded-full py-3 px-8 font-semibold text-rose-900 border border-primary relative -mt-6">
      <img src={icon} alt={alt} />
      {text}
    </button>
  );
};
