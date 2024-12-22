import { useEffect } from "react";
// components
import { Cart } from "./components/Cart";
import { CardList } from "./components/CardList";
// hooks
import useProductsList from "./hooks/useProductsList";
// styles
import "./App.css";

function App() {
  const [fetchProductsList, productsList] = useProductsList();

  useEffect(() => {
    fetchProductsList();
  }, []);

  return (
    <div className="p-6">
      {productsList ? <CardList products={productsList} /> : <p>LOADING...</p>}
      <Cart />
    </div>
  );
}

export default App;
