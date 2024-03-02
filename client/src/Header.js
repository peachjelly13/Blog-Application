import React from 'react'
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
    <Link to="/" className="logo">Blogs4U</Link>
    <nav>
      <Link to="/login">Login4U</Link>
      <Link to="/register">Register4U</Link>
    </nav>
  </header>
  )
}

export default Header;
