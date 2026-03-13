import React from 'react';
import Button from './Button';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-text">
          <h2 className="hero-subtitle">Excelência Jurídica e Devoção</h2>
          <h1 className="hero-title">Defendendo seus direitos com <span>estratégia e integridade</span>.</h1>
          <p className="hero-description">
            Soluções jurídicas personalizadas para questões complexas. Nosso compromisso é com a justiça e com o sucesso dos nossos clientes.
          </p>
          <div className="hero-actions">
            <Button variant="primary">Agendar Consulta</Button>
            <Button variant="outline">Conheça Nossas Áreas</Button>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="mouse"></div>
        <span>Rolar para baixo</span>
      </div>
    </section>
  );
};

export default Hero;
