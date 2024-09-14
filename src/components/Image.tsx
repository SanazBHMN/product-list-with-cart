// import hooks
import useSize from "../hooks/useSize";

interface ImageProp {
  imageSource: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  altText: string;
}

function Image({ imageSource, altText }: ImageProp) {
  const windowSize = useSize();

  // Use windowSize to determine which image to display
  const selectedImage =
    windowSize < 768
      ? imageSource.mobile
      : windowSize < 1024
      ? imageSource.tablet
      : imageSource.desktop;
  return (
    <div className="">
      <img className="w-full rounded-xl" src={selectedImage} alt={altText} />
    </div>
  );
}

export default Image;
