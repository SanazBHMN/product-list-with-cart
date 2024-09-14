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
  return (
    <div className="">
      <img className="w-full rounded-xl" src={imageSource} alt={altText} />
    </div>
  );
}

export default Image;
