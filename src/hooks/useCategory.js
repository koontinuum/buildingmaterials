import {
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { useCallback, useState } from "react";
import { db } from "../firebase/firebase";

const useCategory = () => {
  const [error, setError] = useState("");
  const [categories, setCategories] = useState([]);
  const [categoryDetail, setCategoryDetail] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const getCategories = useCallback(async () => {
    const arr = [];
    const data = await getDocs(collection(db, "category"));
    data.forEach((doc) => {
      arr.push({ tid: doc.id, ...doc.data() });
    });
    setCategories(arr);
    setLoading(false);
  }, []);

  const getCategoryDetail = async (id) => {
    const docRef = doc(db, "category", id);
    const res = await getDoc(docRef);
    setLoading(false);
    if (res.exists()) {
      setCategoryDetail(res.data());
    } else {
      setError("Данная услуга не найдена!");
    }
  };

  return {
    isLoading,
    categories,
    getCategories,
    categoryDetail,
    getCategoryDetail,
    error,
  };
};

export default useCategory;
