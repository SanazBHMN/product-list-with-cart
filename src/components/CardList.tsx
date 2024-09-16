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
    <>
      <ul className="md:grid md:grid-cols-3 gap-4">
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
