import { useNavigate } from 'react-router-dom';

const foodItems = [
  { id: 1, name: 'Zinger Burger', price: 450, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500' },
  { id: 2, name: 'Chicken Biryani', price: 350, img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500' },
  { id: 3, name: 'Cheese Pizza', price: 999, img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500' },
  { id: 4, name: 'French Fries', price: 200, img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500' },
  { id: 5, name: 'Cold Drink', price: 100, img: 'https://images.unsplash.com/photo-1543253687-c931c8e01820?w=500' },
  { id: 6, name: 'Club Sandwich', price: 400, img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500' },
  { id: 7, name: 'Pasta Italiano', price: 600, img: 'https://images.unsplash.com/photo-1546548970-71785318a17b?w=500' },
  { id: 8, name: 'Chocolate Sundae', price: 150, img: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=500' },
];

function Home({ addToCart, cart }) {
  const navigate = useNavigate();
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="home-container" style={{ paddingBottom: '110px' }}>
      
      {/* Header Section */}
      <header className="header">
        <div className="header-title-section">
          <h1>Foodie</h1>
          <p>Best food in town delivered to you</p>
        </div>
        
        <div className="header-cart-icon">
          <span>🛒 Items: {cart.length}</span>
        </div>
      </header>

      {/* Grid Section */}
      <div className="food-grid">
        {foodItems.map((item) => (
          <div key={item.id} className="food-card">
            <img src={item.img} alt={item.name} />
            <div className="card-body">
              <h3 style={{margin: '0 0 5px 0', fontSize: '1.2rem'}}>{item.name}</h3>
              <p style={{color: '#ff4757', fontWeight: 'bold', fontSize: '1.3rem', margin: '0 0 12px 0'}}>
                Rs. {item.price}
              </p>
              <button onClick={() => addToCart(item)} className="btn-add">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Bottom Bar */}
      {cart.length > 0 && (
        <div className="floating-cart" onClick={() => navigate('/cart')}>
          <div style={{fontSize: '17px'}}>
            <span>{cart.length} Item(s) | </span>
            <span className="price-tag">Rs. {totalPrice}</span>
          </div>
          <div style={{ fontWeight: 'bold', fontSize: '17px' }}>Checkout →</div>
        </div>
      )}
    </div>
  );
}

export default Home;