import React from 'react'
import './style.css'

const About = () => {
  return (
    <div id="about" className='container about-container'>
        <h2 className='title-xl gradient'>Sobre a Grow</h2>
        <div className='about-content-container'>
          {/* <div className='video'>
              
               
              <video width="100%" height="auto" controls>
                  <source src="src/assets/videos/placeholder-video.mp4" type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
              </video>
          </div> */}
          <img src="/images/agency-placeholder.jpg" alt="Imagem sobre a Grow" className='about-image' />
          <div className='about-text'>
            <p className='paragraph'>Somos mais que uma agência de marketing: somos um <strong>ecossistema de soluções criativas, tecnológicas e estratégicas</strong> para marcas que querem crescer, se destacar e se conectar de verdade com seu público.</p>
            <p className='paragraph'>Acreditamos no poder das <strong>histórias bem contadas</strong>, das ideias criativas e inteligentes e da valorização da personalidade. Por isso, desenvolvemos campanhas que <strong>emocionam, engajam e geram resultados reais</strong>, dentro e fora das redes.</p>
            <p className='paragraph'>Nosso diferencial? Uma <strong>visão 360°</strong> que considera o público externo, a cultura interna da empresa e o futuro do seu setor. Ao se conectar ao nosso <strong>HUB criativo</strong>, você não apenas amplia sua comunicação, mas anexa à sua empresa um setor completo de soluções. Soluções criativas que vão além do marketing tradicional envolvendo tecnologia, inteligência artificial e inovação contínua.</p>
            <p className="paragraph">Aqui, sua marca acompanha o ritmo das transformações do mundo.</p>
            <p className="paragraph">Seja bem-vindo à <strong>Grow Creative Hub.</strong></p>
          </div>
        </div>
    </div>
  )
}

export default About

