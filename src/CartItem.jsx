import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + (item.quantity * parseFloat(item.cost.substring(1))), 0).toFixed(2);
  };
  const handleIncrement = (item) => { dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 })); };
  const handleDecrement = (item) => {
    if (item.quantity > 1) { dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 })); } 
    else { dispatch(removeItem(item.name)); }
  };
  const calculateTotalCost = (item) => { return (item.quantity * parseFloat(item.cost.substring(1))).toFixed(2); };
  return (
    <div className="cart-container">
      <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img src={item.image} alt={item.name} style={{width: '100px'}}/>
            <div>
              <div>{item.name}</div> <div>Unit Price: {item.cost}</div>
              <div>
                <button onClick={() => handleDecrement(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div>Subtotal: ${calculateTotalCost(item)}</div>
              <button onClick={() => dispatch(removeItem(item.name))}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={onContinueShopping}>Continue Shopping</button>
      <button onClick={() => alert('Coming Soon')}>Checkout</button>
    </div>
  );
};
export default CartItem;
