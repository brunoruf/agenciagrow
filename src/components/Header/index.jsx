import React, { useState } from 'react';
import './style.css';

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <div className="header-mobile">
      <img
        src="src/assets/images/logo-grow-dkbg.svg"
        alt="Logo da Grow"
        className="logo shadow"
      />

      {/* Botão do menu */}
      <a className="menu-button" onClick={alternarMenu}>
        <img src="images/icon-menu.svg" alt="Menu" />
      </a>

      {/* Menu mobile */}
      <div className={`menu-mobile-container ${menuAberto ? 'active' : ''}`}>
        <span className="menu-mobile-arrow"></span>
        <nav className="menu-mobile">
          <ul>
            <li><a href="#about" className='title'>Sobre a Grow</a></li>
            <li><a href="#plano-de-acao" className='title'>Plano de Ação</a></li>
            <li><a href="#cases" className='title'>Cases de Sucesso</a></li>
            <li><a href="#contact" className='title'>Entre em Contato</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
