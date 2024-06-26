import axios from 'axios';
import React, { useState } from 'react';
import './LoginRegister.css';
import { FaUserAlt, FaLock, FaEnvelope, FaGoogle } from 'react-icons/fa';

const LoginRegister = () => {
  const [action, setAction] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loginError, setLoginError] = useState(null);

  const registerLink = () => {
    setAction(' active');
  };

  const loginLink = () => {
    setAction('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Redirige a la página de inicio de sesión de Google
      window.location.href = 'http://127.0.0.1:5000/login';
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setLoginError('Por favor complete todos los campos');
      return;
    }
    // Aquí puedes enviar los datos del login al backend si fuera necesario
  };

  return (
    <div className={`wrapper${action}`}>
      <div className='form-box login'>
        <form onSubmit={handleSubmitLogin}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <FaUserAlt className='icon' />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className='icon' />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Recordarme
            </label>
            <a href="#"> Olvidaste la contraseña</a>
          </div>
          {loginError && <p className="error">{loginError}</p>}
          <button type='submit'>Login</button>
          <div className="register-link">
            <p>O inicia sesión con </p>
          </div>
          <button type="button" onClick={handleLogin}><FaGoogle /> Continua con Google </button>
          <div className="register-link">
            <p>No tienes una cuenta? <a href="#" onClick={registerLink}>Registrate</a></p>
          </div>
        </form>
      </div>

      <div className='form-box register'>
        <form action="">
          <h1>Registro</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <FaUserAlt className='icon' />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FaEnvelope className='icon' />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className='icon' />
          </div>
          <div className="remember-forgot">
            <label> <input type="checkbox" />Aceptas los terminos & condiciones</label>
          </div>
          <button type='submit'>Registrarse</button>
          <div className="register-link">
            <p> Ya tienes una cuenta? <a href="#" onClick={loginLink}>Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;
