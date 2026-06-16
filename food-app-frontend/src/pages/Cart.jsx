import { useNavigate } from 'react-router-dom';
import api from '../api';

function Cart({ cart, clearCart }) {
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

 const handleCheckout = async () => {
  try {
    // Local storage se naam nikaalein
    const nameFromStorage = localStorage.getItem('userName') || 'Guest';

    const response = await api.post('/checkout', {
      total: total,
      cart: cart,
      customer_name: nameFromStorage // Naya field add kiya
    });

    alert("🎉 " + response.data.message);
    clearCart();
    navigate('/home');
  } catch (error) {
    alert("Order failed!");
  }
};

  return (
    <div className="cart-container">
      <div className="cart-box">
        <h2 style={{ textAlign: 'center', margin: '0 0 20px 0' }}>Order Summary</h2>
        
        {cart.length === 0 ? (
          <div style={{textAlign: 'center'}}>
            <p>Your cart is empty!</p>
            <button onClick={() => navigate('/home')} className="btn-login">Browse Menu</button>
          </div>
        ) : (
          <>
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <span>{item.name}</span>
                <span style={{fontWeight: 'bold'}}>Rs. {item.price}</span>
              </div>
            ))}
            
            <div className="total-section">
              <span>Total:</span>
              <span style={{color: '#ff4757'}}>Rs. {total}</span>
            </div>

            <button onClick={handleCheckout} className="btn-checkout">
              Place Order Now
            </button>
            <button onClick={() => navigate('/home')} className="btn-back">
              Add more items
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;