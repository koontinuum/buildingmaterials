import {
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { useCallback, useState } from "react";
import { db } from "../firebase/firebase";

const useCatalog = () => {
  const [error, setError] = useState("");
  const [catalogs, setCatalogs] = useState([]);
  const [catalogDetail, setCatalogDetail] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const getCatalogs = useCallback(async () => {
    const arr = [];
    const data = await getDocs(collection(db, "catalogs"));
    data.forEach((doc) => {
      arr.push({ tid: doc.id, ...doc.data() });
    });
    setCatalogs(arr);
    setLoading(false);
  }, []);

  const getCatalogDetail = async (id) => {
    const docRef = doc(db, "catalogs", id);
    const res = await getDoc(docRef);
    setLoading(false);
    if (res.exists()) {
      setCatalogDetail(res.data());
    } else {
      setError("Данная услуга не найдена!");
    }
  };

  return {
    isLoading,
    catalogs,
    getCatalogs,
    catalogDetail,
    getCatalogDetail,
    error,
  };
};

export default useCatalog;
