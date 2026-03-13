import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <div className="logo">
          <h1>LEX<span>ASSOCIADOS</span></h1>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#sobre">Escritório</a></li>
            <li><a href="#areas">Áreas de Atuação</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
        <div className="header-cta">
          <a href="#contato" className="btn-header">Agendar Consulta</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
