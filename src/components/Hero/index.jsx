/* global gtag, fbq */

import React from 'react'
import './style.css'

const Hero = () => {

  const handleClick = () => {
    // Facebook Pixel - evento personalizado
    if (typeof fbq !== 'undefined') {
      fbq('trackCustom', 'CliqueSolicitacaoDeAnalise');
    }

    // Google Analytics (GA4) - evento personalizado
    if (typeof gtag !== 'undefined') {
      gtag('event', 'CliqueSolicitacaoDeAnalise', {
        event_category: 'Hero',
        event_label: 'Quero minha análise'
      });
    }
  }

  return (
    <div className="hero">
        <div className="hero-background"></div>
        <div className="hero-content">
            <h2 className='title-xl'>Conecte sua marca com um HUB criativo</h2>
            <p className='paragraph-md'>Somos a extensão criativa e estratégica do seu negócio.</p>
            <p className='paragraph-md'><strong>Solicite agora uma pré-análise sem custo.</strong></p>
            
            <a
              href="#contact"
              className="button-md btn-contato"
              onClick={handleClick}
            >
              Quero minha análise
            </a>
        </div>
    </div>
  )
}

export default Hero
