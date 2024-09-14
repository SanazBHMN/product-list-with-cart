interface ButtonProp {
  icon: string;
}

function Button({ icon }: ButtonProp) {
  return (
    <div className="w-full">
      <button className="flex justify-center items-center gap-2 py-2 px-6 m-auto bg-white border border-Rose-900 rounded-full font-[500] -mt-5 hover:border-primary hover:text-primary">
        <img src={icon} alt="" />
        <span>Add to Cart</span>
      </button>
    </div>
  );
}

export default Button;
