import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api'; // Jo abhi humne file banyi

function Login() {
  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setPassword] = useState('password');
  const navigate = useNavigate();

 const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await api.post('/login', { email, password });
    
    // User ka naam local storage mein save karein
    localStorage.setItem('userName', response.data.user.name); 

    alert("Welcome " + response.data.user.name);
    navigate('/home');
  } catch (error) {
    alert("Invalid Credentials!");
  }
};

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Foodie</h1>
        <p>Login to your account</p>
        <form onSubmit={handleLogin} className="form-group">
          <input 
            type="email" 
            placeholder="Email Address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button onClick={() => navigate('/register')} className="btn-back">
  Don't have an account? Register here
</button>
          <button type="submit" className="btn-login">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;