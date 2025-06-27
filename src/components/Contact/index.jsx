import React, { useState } from 'react';
import './style.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedbackMessage('');

    const data = new FormData();
    data.append('Nome', formData.nome);
    data.append('Email', formData.email);
    data.append('Mensagem', formData.mensagem);
    data.append('_honey', ''); // anti-spam
    data.append('_captcha', 'false'); // desativa captcha
    data.append('_subject', 'Nova mensagem do site');

    try {
      const response = await fetch('https://formsubmit.co/ajax/contato@growcreativehub.com.br', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setFeedbackMessage('Mensagem enviada com sucesso!');
        setFormData({ nome: '', email: '', mensagem: '' });
      } else {
        setFeedbackMessage('Erro ao enviar. Tente novamente.');
      }
    } catch (error) {
        console.error('Erro no envio:', error);
      setFeedbackMessage('Erro de rede. Verifique sua conexão.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="container">
      <div className='contact-phones'>
        <h2 className="title-xl gradient cases-title">Entre em contato</h2>
        <p className="paragraph-md">Abaixo nossos telefones de contato. Entraremos em contato o mais breve possível.</p>
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
          <p className="paragraph-md contact-message-info">Ou envie uma mensagem que responderemos em breve.</p>
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

        <div className='form-submit'>
          <button type="submit" className="button" disabled={loading}>
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
          <span className='form-feedback paragraph'>{feedbackMessage}</span>
        </div>
      </form>
    </section>
  );
};

export default Contact;
