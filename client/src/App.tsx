import { useEffect, useState } from "react";
// components
import { Cart } from "./components/Cart";
import { CardList } from "./components/CardList";
// hooks
import useProductsList from "./hooks/useProductsList";
// styles
import "./App.css";

function App() {
  const [fetchProductsList, productsList] = useProductsList();
  const [order, setOrder] = useState<Record<number, number>>({});

  useEffect(() => {
    fetchProductsList();
  }, []);

  const handleButtonClick = (productId: number) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      [productId]: (prevOrder[productId] || 0) + 1,
    }));
  };

  const handleIncrement = (productId: number) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      [productId]: (prevOrder[productId] || 0) + 1,
    }));
  };

  const handleDecrement = (productId: number) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      [productId]: (prevOrder[productId] || 0) - 1,
    }));
  };

  const handleRemoveItem = (productId: number) => {
    setOrder((prevOrder) => {
      const { [productId]: _, ...remainingOrder } = prevOrder;
      return remainingOrder;
    });
  };

  return (
    <div className="p-6">
      {productsList ? (
        <CardList
          products={productsList}
          order={order}
          handleButtonClick={handleButtonClick}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      ) : (
        <p>LOADING...</p>
      )}
      <Cart
        products={productsList}
        order={order}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}

export default App;
