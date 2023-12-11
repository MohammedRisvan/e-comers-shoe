
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mycontext } from '../../App';

function Addcart() {
  const navigate = useNavigate();
  const { logo, cart, setCart, setprice,  setCartId,cartId } = useContext(Mycontext);

  // Ensure cartId is initialized with an empty array
  useEffect(() => {
    // Filter cart based on the logo.id and set the result to cartId
    setCart(cartId.filter((car) => logo.id === car.userid));
  }, [cartId, logo.id]);  

  const updateQuantity = (itemId, amount) => {
    const updatedCart = cartId.map((item) =>
      item.id === itemId && item.userid==logo.id
        ? { ...item, quantity: (item.quantity || 1) + amount }
        : item
    );
    setCartId([...updatedCart]);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartId.filter((item) => item.id !== itemId &&item.userid==logo.id);
    setCartId(updatedCart);
  };

  const totalpp = cart
    .reduce((acc, item) => acc + item.price * item.quantity || 1,0)
    .toFixed(2);

  return (
    <div className='main-background'>
      <span>SHOPPING CART</span>
      <button onClick={() => navigate("/collection")}>Go to Collection</button>
      <table style={{ width: '85%' }}>
        <thead>
          <tr>
            <th>Shoe Image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Subtotal</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.length === 0 ? (
            <tr>
              <td colSpan="6">
                <h3>Your Cart is Empty!</h3>
              </td>
            </tr>
          ) : (
            cart.map((item) => (
              console.log(item),
              <tr key={item.id}>
                <td>
                  <img src={item.image} alt="" width="70px" height="60px" />
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <td><button onClick={() => updateQuantity(item.id, -1)}> - </button></td>
                  <td>
                    <p className="lead d-flex fw-normal mb-0">
                      {" "}
                      {item.quantity || 1}{" "}
                    </p>
                  </td>
                  <td> <button onClick={() => updateQuantity(item.id, 1)}> + </button></td>
                </td>
                <td>${(item.price * item.quantity || item.price).toFixed(2)}</td>
                <td>
                  <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4">Total: ${totalpp}</td>
            <td></td>
            <td>
              <button
                type="button"
                onClick={() => {
                  if (cart.length === 0) {
                    alert('Cart is empty, add items to cart');
                  } else {
                    if (!logo) {
                      alert('Login to continue');
                      navigate("/login");
                    } else {
                      navigate("/payment");
                      setprice(totalpp);
                    }
                  }
                }}
              >
                CheckOut
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Addcart;
