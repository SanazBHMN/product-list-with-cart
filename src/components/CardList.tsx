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
  title: string;
}

function CardList({ desserts, title }: CardListProp) {
  return (
    <>
      <h1 className="font-bold text-3xl">{title}</h1>
      <ul>
        {desserts.map((dessert, index) => (
          <li key={index}>
            <Card dessert={dessert} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default CardList;
