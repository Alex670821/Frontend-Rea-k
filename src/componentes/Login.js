import React from 'react';
import axios from 'axios';

const Login = () => {
  const handleLogin = async () => {
    try {
      // Redirige a la página de inicio de sesión de Google
      window.location.href = 'http://127.0.0.1:5000/login';

      // Si necesitas realizar alguna acción después de iniciar sesión con Google,
      // por ejemplo, enviar datos al backend, podrías usar axios aquí
      const response = await axios.post('http://127.0.0.1:5000/api/login/google', { /* datos a enviar */ });
      console.log('Respuesta del servidor:', response.data);
      
      // Puedes manejar la respuesta del servidor aquí, por ejemplo, actualizar el estado del componente
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    
    <div>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
