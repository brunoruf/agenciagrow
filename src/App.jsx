import './App.css'
import Header from './components/Header/';
import Hero from './components/Hero';
import About from './components/About';
import Plano from './components/Plano';
import Founder from './components/Founder';
import Cases from './components/Cases';


function App() {

  return (
    <>
    <Header />
    <Hero />
    <About />
    <div className='plano-de-acao-container'>
          <div id="plano-de-acao" className='container'>
              <h2 className='title-xl gradient plano-de-acao-title'>Plano de Ação</h2>         
              <h3 className='title-l gradient plano-de-acao-subtitle'>Conheça as 7 peças do nosso plano de ação.</h3>         
              <div className="plano-container">
                  <Plano 
                    number={1} title={'Primeiro Contato'} 
                    subTitle={'Nos conhecendo'} 
                    description={'Entendemos suas dores, necessidades e alinhamos os objetivos do projeto.'} 
                    videoUrl={'src/assets/videos/peca1.mp4'}
                    coverImage={'/images/videos-cover/peca1.jpg'} 
                   />
                  <Plano 
                    number={2} title={'Imersão'} 
                    subTitle={'Mergulho na sua marca'} 
                    description={'Analisamos sua empresa, conhecemos o ambiente de trabalho, a operação, os perfis das equipes e todo o histórico de ações de marketing.'} 
                    videoUrl={'src/assets/videos/placeholder-video.mp4'} 
                  />
                  <Plano 
                    number={3} title={'Imersão'} 
                    subTitle={'Mergulho na sua marca'} 
                    description={'Analisamos sua empresa, conhecemos o ambiente de trabalho, a operação, os perfis das equipes e todo o histórico de ações de marketing.'} 
                    videoUrl={'src/assets/videos/placeholder-video.mp4'} 
                  />
              </div>
          </div>
    </div>
    <Founder />
    <Cases />
    </>
  )
}

export default App
