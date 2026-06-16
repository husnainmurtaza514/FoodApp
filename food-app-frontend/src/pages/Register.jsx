import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
  e.preventDefault();
  try {
    const response = await api.post('/register', { name, email, password });
    alert(response.data.message);
    navigate('/');
  } catch (error) {
    // Ye line asli error dikhayegi
    const errorMsg = error.response?.data?.message || "Something went wrong!";
    alert("Error: " + errorMsg);
  }
};

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Foodie</h1>
        <p>Create your account</p>
        <form onSubmit={handleRegister} className="form-group">
          <input type="text" placeholder="Full Name" onChange={(e)=>setName(e.target.value)} required />
          <input type="email" placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)} required />
          <input type="password" placeholder="Password (min 6 chars)" onChange={(e)=>setPassword(e.target.value)} required />
          <button type="submit" className="btn-login">Register</button>
        </form>
        <button onClick={() => navigate('/')} className="btn-back">Already have an account? Login</button>
      </div>
    </div>
  );
}

export default Register;