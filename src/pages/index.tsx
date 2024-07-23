import CardGrid from "@/components/cardGrid";
import ProductCardGrid from "@/components/productCard";
import { useEffect, useState } from "react";
import { getProducts } from "@/utils/getProducts";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getAllProducts = async () => {
      const allProducts = await getProducts()
        .then((res) => res)
        .catch((error) => error);
      setProducts(allProducts);
    };
    getAllProducts();
  }, []);

  return (
    <div>
      <CardGrid />
      <ProductCardGrid products={products} />
    </div>
  );
}
