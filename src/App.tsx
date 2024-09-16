import { useState } from "react";
// import components
import CardList from "./components/CardList";
import Cart from "./components/Cart";
// import statics
import data from "./data.json";
// import styles
import "./App.css";

function App() {
  const [desserts, setDesserts] = useState<
    {
      image: {
        thumbnail: string;
        mobile: string;
        tablet: string;
        desktop: string;
      };
      name: string;
      category: string;
      price: number;
    }[]
  >(data);
  return (
    <main className="w-full min-h-screen bg-Rose-100 py-14 xl:px-28">
      <div className="w-11/12 m-auto xl:flex xl:justify-around xl:gap-10">
        <section>
          <h1 className="font-bold text-3xl">Desserts</h1>
          <CardList desserts={desserts} />
        </section>
        <aside>
          <Cart title="Your cart" />
        </aside>
      </div>
    </main>
  );
}

export default App;
