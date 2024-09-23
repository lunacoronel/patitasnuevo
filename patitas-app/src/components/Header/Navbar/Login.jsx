import React, { useState } from 'react';
import logo from "..\Header\Navbar\logo.png"; // Importa la imagen
import "..\Header\Navbar\Login.css";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario, como hacer una petición a tu backend
    console.log('Nombre de usuario:', username);
    console.log('Contraseña:', password);
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <img src={logo} alt="Logo" /> {/* Usa la variable 'logo' aquí */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Nombre de usuario</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

export default Login;
