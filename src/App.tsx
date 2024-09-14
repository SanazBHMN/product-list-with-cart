import { useState } from "react";
// import components
import CardList from "./components/CardList";
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
    <main className="w-full">
      <section>
        <CardList desserts={desserts} />
      </section>
    </main>
  );
}

export default App;
