import React from 'react'
import './style.css'

const About = () => {
  return (
    <div id="about" className='container'>
        <h2 className='title-xl gradient'>Sobre a Grow</h2>
        <div className='video'>
          
            <video width="100%" height="auto" controls>
                <source src="src/assets/videos/placeholder-video.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
            </video>
        </div> 
        <p className='paragraph'>Somos mais que uma agência de marketing: somos um ecossistema de soluções criativas, tecnológicas e estratégicas para marcas que querem crescer, se destacar e se conectar de verdade com seu público.</p>
        <p className='paragraph'>Acreditamos no poder das histórias bem contadas, das ideias criativas e inteligentes e da valorização da personalidade. Por isso, desenvolvemos campanhas que emocionam, engajam e geram resultados reais, dentro e fora das redes.</p>
        <p className='paragraph'>Nosso diferencial? Uma visão 360° que considera o público externo, a cultura interna da empresa e o futuro do seu setor. Ao se conectar ao nosso HUB criativo, você não apenas amplia sua comunicação, mas anexa à sua empresa um setor completo de soluções. Soluções criativas que vão além do marketing tradicional envolvendo tecnologia, inteligência artificial e inovação contínua.</p>
        <p className="paragraph">Aqui, sua marca acompanha o ritmo das transformações do mundo.</p>
        <p className="paragraph">Seja bem-vindo à Grow Creative Hub.</p>
    </div>
  )
}

export default About

