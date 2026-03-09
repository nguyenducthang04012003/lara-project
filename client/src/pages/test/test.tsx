import { useEffect, useState } from "react";
import HomePageView from "./testView";
import { environment } from "../../services/environment";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  const loadData = async () => {
    const res = await fetch(`${environment.FE_ENDPOINT}homePage`);
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadData();
  }, []);

  return <HomePageView products={products} refresh={loadData} />;
}
