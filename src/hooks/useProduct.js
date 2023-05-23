import {
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { useCallback, useState } from "react";
import { db } from "../firebase/firebase";

const useProduct = () => {
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [productDetail, setProductDetail] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const getProducts = useCallback(async () => {
    const arr = [];
    const data = await getDocs(collection(db, "products"));
    data.forEach((doc) => {
      arr.push({ tid: doc.id, ...doc.data() });
    });
    setProducts(arr);
    setLoading(false);
  }, []);

  const getProductDetail = async (id) => {
    const docRef = doc(db, "products", id);
    const res = await getDoc(docRef);
    setLoading(false);
    if (res.exists()) {
      setProductDetail(res.data());
    } else {
      setError("Данная услуга не найдена!");
    }
  };

  return {
    isLoading,
    products,
    getProducts,
    productDetail,
    getProductDetail,
    error,
  };
};

export default useProduct;
