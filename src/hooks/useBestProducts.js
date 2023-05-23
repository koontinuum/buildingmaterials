import {
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { useCallback, useState } from "react";
import { db } from "../firebase/firebase";

const useBestProduct = () => {
  const [error, setError] = useState("");
  const [bestProducts, setBestProducts] = useState([]);
  const [bestProductsDetail, setBestProductsDetail] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const getBestProducts = useCallback(async () => {
    const arr = [];
    const data = await getDocs(collection(db, "best-products"));
    data.forEach((doc) => {
      arr.push({ tid: doc.id, ...doc.data() });
    });
    setBestProducts(arr);
    setLoading(false);
  }, []);


  const getBestProductDetail = async (id) => {
    const docRef = doc(db, "best-products", id);
    const res = await getDoc(docRef);
    setLoading(false);
    if (res.exists()) {
      setBestProductsDetail(res.data());
    } else {
      setError("Данная услуга не найдена!");
    }
  };


  return {
    isLoading,
    bestProducts,
    getBestProductDetail,
    bestProductsDetail,
    getBestProducts,
    error,
  };
};

export default useBestProduct;
