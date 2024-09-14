// import components
import Card from "./Card";

interface CardListProp {
  desserts: {
    image: {
      thumbnail: string;
      mobile: string;
      tablet: string;
      desktop: string;
    };
    name: string;
    category: string;
    price: number;
  }[];
}

function CardList({ desserts }: CardListProp) {
  return (
    <ul>
      {desserts.map((dessert, index) => (
        <li key={index}>
          <Card dessert={dessert} />
        </li>
      ))}
    </ul>
  );
}

export default CardList;
