import './App.css'
import Header from './components/Header/';
import Hero from './components/Hero';
import About from './components/About';
import Plano from './components/Plano';
import Founder from './components/Founder';
import Cases from './components/Cases';
import Contact from './components/Contact';


function App() {

  const planos = [
  {
    number: 1,
    title: 'Primeiro Contato',
    subTitle: 'Nos conhecendo',
    description: 'Entendemos suas dores, necessidades e alinhamos os objetivos do projeto.',
    videoUrl: '/videos/peca1-web.mp4',
    coverImage: '/images/videos-cover/peca1.jpg'
  },
  {
    number: 2,
    title: 'Imersão',
    subTitle: 'Mergulho na sua marca',
    description: 'Analisamos sua empresa, conhecemos o ambiente perfis das equipes e todo o histórico de ações de marketing.',
    videoUrl: '/videos/peca2-web.mp4',
    coverImage: '/images/videos-cover/peca2.jpg'
  },
  {
    number: 3,
    title: 'Pesquisa Estratégica',
    subTitle: 'Inteligência que Gera Resultado',
    description: 'Realizamos uma pesquisa aprofundada de mercado, concorrência, público e posicionamento atual.',
    videoUrl: '/videos/peca3-web.mp4',
    coverImage: '/images/videos-cover/peca3.jpg'
  },
  {
    number: 4,
    title: 'Mentoria para o Time',
    subTitle: 'Alinhando Visões, Potencializando Times',
    description: 'Orientamos seu time interno sobre processos, comunicação, marketing e operação, garantindo que todos estejam alinhados para os próximos passos.',
    videoUrl: '/videos/peca4-web.mp4',
    coverImage: '/images/videos-cover/peca4.jpg'
  },
  {
    number: 5,
    title: 'Criativo em Ação',
    subTitle: 'Ideias Que Ganham Vida',
    description: 'Desenvolvemos campanhas criativas, roteiros, vídeos, fotos, design e narrativas que conectam sua marca com seu público.',
    videoUrl: '/videos/peca5-web.mp4',
    coverImage: '/images/videos-cover/peca5.jpg'
  },
  {
    number: 6,
    title: 'Ativação de Campanhas',
    subTitle: 'Hora de Ganhar o Mundo',
    description: 'Colocamos no ar campanhas estratégicas através de tráfego pago, redes sociais, inbound, outbound marketing e marketing tradicional, maximizando alcance e conversões.',
    videoUrl: '/videos/peca6-web.mp4',
    coverImage: '/images/videos-cover/peca6.jpg'
  },
  {
    number: 7,
    title: 'Suporte Contínuo',
    subTitle: 'Crescendo Juntos Todos os Dias',
    description: 'Acompanhamento constante dos resultados, otimizações, relatórios, suporte no dia a dia e disponibilização da nossa equipe de social media para gestão contínua.',
    videoUrl: '/videos/peca7-web.mp4',
    coverImage: '/images/videos-cover/peca7.jpg'
  }
];


  return (
    <>
    <Header />
    <Hero />
    <About />
    <div className='plano-de-acao-container'>
          <div id="plano-de-acao" className='container'>
              <h2 className='title-xl  plano-de-acao-title'><span className='gradient'>Plano de Ação</span></h2>         
              <h3 className='title-l plano-de-acao-subtitle'><span className='gradient'>Conheça as 7 peças do nosso plano de ação.</span></h3>         
              <div className="plano-container">
  {planos.map((plano, index) => (
    <Plano
      key={index}
      number={plano.number}
      title={plano.title}
      subTitle={plano.subTitle}
      description={plano.description}
      videoUrl={plano.videoUrl}
      coverImage={plano.coverImage}
      invertido={index % 2 == 0}
    />
  ))}
</div>

          </div>
    </div>
    <Founder />
    <Cases />
    <Contact />
    </>
  )
}

export default App
