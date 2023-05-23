import React, { useEffect, useState } from "react";
import css from "./Basket.module.css";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../redux/basketSlice";

function Basket() {
  const cartItems = useSelector(state => state.cart.productsBasket);
  const dispatch = useDispatch();
  const [messageWhatsApp, setMessage] = useState();

  console.log(cartItems)

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  useEffect(() => {
    if (cartItems) {
      const messageData = []
      cartItems.forEach((el) => {
        messageData.push(el.title)
      })
      setMessage(messageData)
      console.log(messageWhatsApp)
    }
  }, [])

  const handleWhatsAppClick = () => {
    const phoneNumber = '79017029445'; // Замените на нужный номер телефона
    const message = `Здравствуйте, хочу заказать ${messageWhatsApp}`; // Замените на нужное сообщение

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  };

  return (
    <div className={css.basket__wrapper}>
      <h1>Корзина</h1>
      <div className={css.basket__products}>
        {cartItems?.map((item) => (
          <div className={css.basket__product}>
            <img src={item.image} alt={item.title} />
            <strong>{item.title}</strong>
            <b>{item.price} руб.</b>
            <button onClick={() => handleRemoveItem(item.tid)}>Удалить</button>
          </div>
        ))}
      </div>
      <button onClick={handleWhatsAppClick}>Оформить покупку</button>
    </div>
  );
}

export default Basket;
