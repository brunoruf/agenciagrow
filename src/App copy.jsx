import './App.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from './components/Header/';
import Hero from './components/Hero';
import About from './components/About';


// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Create timeline for the scroll animation
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.plano-container',
        start: 'center center',
        end: '+=300%', // Adjust this value based on how much scroll you want
        scrub: 1, // Smooth scrubbing
        pin: '#plano-de-acao',
        pinSpacing: true,
        markers: true, // Remove this in production
        onUpdate: self => {
            // Optional: Add any additional logic during scroll
            console.log("Progress:", self.progress);
        }
    }
});

// Animation sequence
tl.to('.plano1', { opacity: 1, duration: 1, display:'block', zIndex: '2', scale: 1 }) // Show plano1
  .to('.plano1', { opacity: 0, duration: 1, display:'none', zIndex: '1', scale: 0.5  }, "+=1") // Hide plano1 after 1 second
  .to('.plano2', { opacity: 1, duration: 1, display:'block', zIndex: '2', scale: 1  }, "-=0.5") // Show plano2 (overlap by 0.5s)
  .to('.plano2', { opacity: 0, duration: 1, display:'none', zIndex: '1', y:50  }, "+=1") // Hide plano2
  .to('.plano3', { opacity: 1, duration: 1 }, "-=0.5") // Show plano3
  .to('.plano3', { opacity: 0, duration: 1 }, "+=1") // Hide plano3
  .to('.plano4', { opacity: 1, duration: 1 }, "-=0.5") // Show plano4
  .to('.plano4', { opacity: 0, duration: 1 }, "+=1") // Hide plano4
  .to('.plano5', { opacity: 1, duration: 1 }, "-=0.5") // Show plano5
  .to('.plano5', { opacity: 0, duration: 1 }, "+=1") // Hide plano5
  .to('.plano6', { opacity: 1, duration: 1 }, "-=0.5") // Show plano6
  .to('.plano6', { opacity: 0, duration: 1 }, "+=1") // Hide plano6
  .to('.plano7', { opacity: 1, duration: 1 }, "-=0.5") // Show plano7
  .to('.plano7', { opacity: 0, duration: 1 }, "+=1") // Hide plano7
  .to('#plano-de-acao', { opacity: 0, duration: 1 }, "+=1"); // Hide planodeacao




function App() {

  return (
    <>
    <Header />
    <Hero />
    <About />
          <div id="plano-de-acao" className='container'>
              <h2 className='title-xl gradient'>Plano de Ação</h2>         
              <div className="plano-container">
                  <div className="plano1">
                      <div className="plano-description">
                          <h2>Plano1</h2>
                          <span>Frase do Plano 1</span>
                          <p>Descrição detalhada do Plano 1.</p>
                      </div>
                      <div className="plano-video">
                              <iframe width="90%" height="auto" src="https://www.youtube.com/embed/hiyEKeSYmAU?si=EygfsNYQlU54mFsq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      </div>
                  </div>
                  <div className="plano2">
                      <div className="plano-description">
                          <h2>Plano2</h2>
                          <span>Frase do Plano 2</span>
                          <p>Descrição detalhada do Plano 2.</p>
                      </div>
                      <div className="plano-video">
                              <iframe src="https://www.youtube.com/embed/flZ7KhKHOyA?si=yM4xGF4LYOIif2yH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      </div>
                  </div>
              </div>
          </div>
          <div id="conteudo-final"></div>
          <p className="zaz">zaz</p>
    </>
  )
}

export default App
