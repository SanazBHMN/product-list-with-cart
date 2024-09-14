// import components
import Button from "./Button";
import Image from "./Image";
import CardText from "./CardText";

// import statics
import cart from "../../public/images/icon-add-to-cart.svg";

interface CardProp {
  dessert: {
    image: {
      thumbnail: string;
      mobile: string;
      tablet: string;
      desktop: string;
    };
    name: string;
    category: string;
    price: number;
  };
}

function Card({ dessert }: CardProp) {
  return (
    <div className="w-11/12 m-auto mb-8">
      <Image imageSource={dessert.image} altText={dessert.name} />
      <Button icon={cart} />
      <div className="mt-4">
        <CardText text={dessert.category} tag="category" />
        <CardText text={dessert.name} tag="name" />
        <CardText text={dessert.price} tag="price" />
      </div>
    </div>
  );
}

export default Card;
