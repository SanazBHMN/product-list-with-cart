// import icons
import carbonNeutral from "../assets/icons/icon-carbon-neutral.svg";

export const DeliveryNote = () => {
  return (
    <div className="w-full flex justify-center items-center gap-1 bg-rose-100 text-rose-900 py-4 rounded-md">
      <img src={carbonNeutral} alt="carbon-neutral" />
      <p>
        This is a <span className="font-semibold">carbon-neutral</span> delivery
      </p>
    </div>
  );
};
