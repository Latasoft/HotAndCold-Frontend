import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importa useNavigate
import { useAuth } from '../context/AuthContext';
import { FaUserCircle } from 'react-icons/fa'; // Ícono usuario

import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    navigate('/login'); // Redirige a login después de logout
  };

  return (
    <nav className="navbar">
      {/* Si NO hay usuario, mostrar logo y nombre */}
      {!user ? (
        <Link to="/" className="navbar-brand-link" onClick={() => setMenuOpen(false)}>
          <div className="navbar-brand">
            <img src="/assets/logo.avif" alt="Logo" className="navbar-logo" />
            <div className="brand-text">
              <span>Hot and Cold</span>
              <p className="brand-subtext">Services</p>
            </div>
          </div>
        </Link>
      ) : (
        // Si hay usuario, mostrar saludo y icono
        <div className="navbar-user-info" onClick={() => setMenuOpen(false)} style={{ cursor: 'pointer' }}>
          <FaUserCircle size={30} style={{ marginRight: '8px' }} />
          <span>Hola, {user.username}</span>
        </div>
      )}

      {/* Botón hamburguesa */}
      <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </button>

      {/* Links del menú */}
      <ul className={`navbar-links ${menuOpen ? 'show' : ''}`}>
        {!user ? (
          <>
            <li><Link to="/tienda" onClick={() => setMenuOpen(false)}>Tienda</Link></li>
            <li><Link to="/climatizacion" onClick={() => setMenuOpen(false)}>Climatización</Link></li>
            <li><Link to="/calefaccion" onClick={() => setMenuOpen(false)}>Calefacción y Centralizada</Link></li>
            <li><Link to="/ventilacion" onClick={() => setMenuOpen(false)}>Ventilación</Link></li>
            <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
          </>
        ) : (
          <>
            <li><button onClick={handleLogout} className="navbar-logout-button">Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
