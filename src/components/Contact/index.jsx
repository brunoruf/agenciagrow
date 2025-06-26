import React, { useState } from 'react';
import './style.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);
    alert('Mensagem enviada com sucesso!');
    setFormData({ nome: '', email: '', mensagem: '' }); // limpa os campos
  };

  return (
    <section id="contact" className="container">
    
      <div>
        <h2 className="title-xl gradient cases-title">Entre em contato</h2>
        <p className="paragraph-md">Nossa equipe entrará em contato o mais breve possível.</p>
        <span className='contact-divider'></span>
        <div className='contact-numbers'>
            <div>
                <h4 className='contact-type-title paragraph-sm'>Telefone</h4>
                <a href="tel:+5511912345678" className='title contact-phone'>(11) 99999-9999</a>
            </div>
            <span className='contact-divider'></span>
            <div>
                <h4 className='contact-type-title paragraph-sm'>WhatsApp</h4>
                <a href="https://wa.me/5511999999999" className='title contact-phone'>(11) 99999-9999</a>
            </div>
            <span className='contact-divider'></span>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          E-mail:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Mensagem:
          <textarea
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            required
          ></textarea>
        </label>

        <button type="submit" className="button">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
