import React, { useEffect, useState } from "react";
import css from "./Products.module.css";
import { categoriesProduct } from "../../objects/categoriesProduct";
import { useLocation } from "react-router-dom";
import { query, where, getDocs, getDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import Preloader from "../preloader/Preloader";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../redux/basketSlice";

function Products() {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [queryParam, setQuery] = useState()

  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    console.log(item)
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  useEffect(() => {
    const currentPath = decodeURIComponent(location.pathname);
    const splitPath = currentPath.split('/');
    const lastSegment = splitPath[splitPath.length - 1];
    setQuery(lastSegment)
  }, [])

  const getData = async (lastSegment) => {
    setIsLoading(true)
    const q = query(collection(db, "products"),
      where('category', '==', lastSegment))
    const data = []
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      let obj = {
        docId: doc.id,
        ...doc.data(),
      };
      data.push(obj);
    });
    setData(data)
    setIsLoading(false)
  }

  useEffect(() => {
    const currentPath = decodeURIComponent(location.pathname);
    const splitPath = currentPath.split('/');
    const lastSegment = splitPath[splitPath.length - 1];
    getData(lastSegment)
  }, [])

  if (isLoading) return <Preloader full />

  return (
    <div className={css.product__wrapper}>
      <h1>{queryParam}</h1>
      <div className={css.products}>
        {data?.map((item, index) => (
          <div className={css.product} key={index}>
            <img src={item.image} alt={item.title} />
            <strong>{item.title}</strong>
            <b>{item.price} {item.currency}.</b>
            <button onClick={() => handleAddItem(item)}>В корзину</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
