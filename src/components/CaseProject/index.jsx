import './style.css';

const CaseProject = ({ title, onClick, backgroundImage }) => {
  return (
    <section className='case-project-container' onClick={onClick}>
      <div className='single-case-image' style={{ '--bg-image': `url(${backgroundImage})` }}>
        <div className='case-project-overlay'></div>
        <div className='case-project-content'>
          <div className='case-project-play'>
            <img src='/images/icons/eye-t.svg' alt='Play Icon' />
            <p className='paragraph-sm case-project-see'>Ver Projeto</p>
          </div>
          <h3 className='paragraph-xl case-project-title'>{title}</h3>
        </div>
      </div>
    </section>
  );
};

export default CaseProject;
