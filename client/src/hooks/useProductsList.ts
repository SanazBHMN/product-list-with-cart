import axios from "axios";
import { useState } from "react";
import { Product } from "../types";

const useProductsList = (): [() => Promise<void>, Product[] | null] => {
  const [productsList, setProductsList] = useState<Product[] | null>(null);

  const fetchProductsList = async () => {
    try {
      const response = await axios.get("http://localhost:8080/products");

      console.log(response.data);
      setProductsList(response.data);
    } catch (error) {
      console.log("ERROR FETCHING PRODUCTS: ", error);
    }
  };

  return [fetchProductsList, productsList];
};

export default useProductsList;
