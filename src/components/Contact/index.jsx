import React, { useState } from 'react';
import './style.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const formatTelefone = (value) => {
    const digits = value.replace(/\D/g, '');
    const ddd = digits.substring(0, 2);
    const rest = digits.substring(2, 11);

    if (rest.length === 0) {
      return ddd ? `(${ddd}` : '';
    }
    if (rest.length < 6) {
      return `(${ddd}) ${rest}`;
    }
    const part1 = rest.substring(0, rest.length - 4);
    const part2 = rest.substring(rest.length - 4);
    return `(${ddd}) ${part1}-${part2}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let v = value;
    if (name === 'telefone') {
      v = formatTelefone(value);
    }
    setFormData({
      ...formData,
      [name]: v,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedbackMessage('');

    const data = new FormData();
    data.append('Nome', formData.nome);
    data.append('Email', formData.email);
    // remove máscara antes de enviar
    data.append('Telefone', formData.telefone.replace(/\D/g, ''));
    data.append('Mensagem', formData.mensagem);
    data.append('_honey', '');           // anti-spam
    data.append('_captcha', 'false');    // desativa captcha
    data.append('_subject', 'Nova mensagem do site');

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/contato@growcreativehub.com.br',
        {
          method: 'POST',
          body: data,
        }
      );

      if (response.ok) {
        setFeedbackMessage('Mensagem enviada com sucesso!');
        setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
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
      <div className="contact-phones">
        <h2 className="title-xl gradient cases-title">Entre em contato</h2>
        <p className="paragraph-md">
          Conecte-se ao nosso Hub Criativo.
        </p>
        <span className="contact-divider"></span>
        <div className="contact-numbers">
          <div>
            <h4 className="contact-type-title paragraph-sm">Telefone</h4>
            <a href="tel:+5511912345678" className="title contact-phone">
              (11) 99999-9999
            </a>
          </div>
          <span className="contact-divider"></span>
          <div>
            <h4 className="contact-type-title paragraph-sm">WhatsApp</h4>
            <a href="https://wa.me/5511999999999" className="title contact-phone">
              (11) 99999-9999
            </a>
          </div>
          <p className="paragraph-md contact-message-info">
            Ou envie uma mensagem que responderemos em breve.
          </p>
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
          Telefone (DDD + Número):
          <input
            type="tel"
            name="telefone"
            maxLength={15}
            value={formData.telefone}
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
          />
        </label>

        <div className="form-submit">
          <button type="submit" className="button" disabled={loading}>
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
          <span className="form-feedback paragraph">{feedbackMessage}</span>
        </div>
      </form>
    </section>
  );
};

export default Contact;
