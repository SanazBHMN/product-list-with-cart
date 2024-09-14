interface CardTextProp {
  text: string | number;
  tag: string;
}

function CardText({ text, tag }: CardTextProp) {
  const tagStyle = `${
    tag === "category"
      ? "text-Rose-500"
      : tag === "name"
      ? "text-Rose-900 font-bold"
      : "text-primary font-bold"
  }`;

  return <p className={`${tagStyle}`}>{tag === "price" ? `$${text}` : text}</p>;
}

export default CardText;
