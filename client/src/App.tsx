import "./App.css";
import { Card } from "./components/Card";
import { Cart } from "./components/Cart";

function App() {
  return (
    <div className="p-6">
      <Cart />
      <Card />
    </div>
  );
}

export default App;
