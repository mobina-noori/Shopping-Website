import React from 'react';
import "../StyleSheets/cart.css";

export default function Cart({ items, remove }) {
  if (items.length === 0) return <div>Your basket is empty</div>;

  const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div>
      <p className="total-price">Total Price: {totalPrice}</p>
      {items.map(item => (
        <div className="cart-item" key={item.id}>
          <h1 className="item-title">{item.title}</h1>
          <p className="item-price">Price: {item.price}</p>
          <p className="item-quantity">Quantity: {item.quantity}</p>
          <button className="remove-b" onClick={() => { remove(item.id) }}>
            <img src="../images/trash-can.jpg" alt="trash" className="img-trash" />
          </button>
          <br />
        </div>
      ))}
    </div>
  );
}

