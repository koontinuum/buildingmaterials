import {
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { useCallback, useState } from "react";
import { db } from "../firebase/firebase";

const useAboutUs = () => {
  const [error, setError] = useState("");
  const [aboutUs, setAboutUs] = useState([]);
  const [aboutUsDetail, setAboutUsDetail] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const getAboutUs = useCallback(async () => {
    const arr = [];
    const data = await getDocs(collection(db, "about-us"));
    data.forEach((doc) => {
      arr.push({ tid: doc.id, ...doc.data() });
    });
    setAboutUs(arr);
    setLoading(false);
  }, []);

  const getAboutUsDetail = async (id) => {
    const docRef = doc(db, "about-us", id);
    const res = await getDoc(docRef);
    setLoading(false);
    if (res.exists()) {
      setAboutUsDetail(res.data());
    } else {
      setError("Данная услуга не найдена!");
    }
  };

  return {
    isLoading,
    aboutUs,
    getAboutUsDetail,
    aboutUsDetail,
    getAboutUs,
    error,
  };
};

export default useAboutUs;
