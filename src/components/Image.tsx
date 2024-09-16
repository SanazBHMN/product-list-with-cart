// import hooks
import useSize from "../hooks/useSize";

interface ImageProp {
  imageSource:
    | string
    | {
        thumbnail: string;
        mobile: string;
        tablet: string;
        desktop: string;
      };
  altText: string;
}

function Image({ imageSource, altText }: ImageProp) {
  const windowSize = useSize();

  // Determine which image to display
  const selectedImage =
    typeof imageSource === "string"
      ? imageSource
      : windowSize < 768
      ? imageSource.mobile
      : windowSize < 1024
      ? imageSource.tablet
      : imageSource.desktop;
  return (
    <div
      className={`${
        typeof imageSource === "string" ? "w-48 m-auto xl:w-32" : ""
      }`}
    >
      <img className="w-full rounded-xl" src={selectedImage} alt={altText} />
    </div>
  );
}

export default Image;
