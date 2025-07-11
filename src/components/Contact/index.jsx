import React, { useState } from 'react';
import './style.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    telefone: '',
    faturamento: '',
    segmento: '',
  });

  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const formatTelefone = (value) => {
    const digits = value.replace(/\D/g, '');
    const ddd = digits.substring(0, 2);
    const rest = digits.substring(2, 11);
    if (rest.length === 0) return ddd ? `(${ddd}` : '';
    if (rest.length < 6) return `(${ddd}) ${rest}`;
    const part1 = rest.substring(0, rest.length - 4);
    const part2 = rest.substring(rest.length - 4);
    return `(${ddd}) ${part1}-${part2}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let v = value;
    if (name === 'telefone') v = formatTelefone(value);
    setFormData({ ...formData, [name]: v });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedbackMessage('');

    const data = new FormData();
    data.append('Nome', formData.nome);
    data.append('Email', formData.email);
    data.append('Telefone', formData.telefone.replace(/\D/g, ''));
    data.append('Empresa', formData.empresa);
    data.append('Faturamento', formData.faturamento);
    data.append('Segmento', formData.segmento);
    data.append('_honey', '');
    data.append('_captcha', 'false');
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
        setFormData({
          nome: '',
          email: '',
          empresa: '',
          telefone: '',
          faturamento: '',
          segmento: '',
        });
      } else {
        setFeedbackMessage('Erro ao enviar. Tente novamente.');
      }
    } catch (error) {
      console.error(error);
      setFeedbackMessage('Erro de rede. Verifique sua conexão.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="container">
      <div className="contact-phones">
        <h2 className="title-xl gradient cases-title">Entre em contato</h2>
        <p className="paragraph-md">Conecte-se ao nosso Hub Criativo.</p>
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
        <p className="paragraph-l intro-form"><strong>Quer saber mais em como podemos ajudar seu negócio?</strong> Preencha o formulário abaixo e nossos especialistas entrarão em contato em até 1 dia útil.</p>
        <label>
          Nome
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            placeholder="Qual seu nome e sobrenome?"
          />
        </label>

        <label>
          E-mail
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Qual seu e-mail corporativo?"
            required
          />
        </label>

        <label>
          Empresa
          <input
            type="text"
            name="empresa"
            value={formData.empresa}
            onChange={handleChange}
            placeholder="Qual o nome da sua empresa?"
            required
          />
        </label>

        <label>
          Telefone (DDD + Número)
          <input
            type="tel"
            name="telefone"
            maxLength={15}
            value={formData.telefone}
            onChange={handleChange}
            required
            placeholder="Qual seu telefone? (com DDD)"
          />
        </label>

        <label>
          Faturamento da empresa
          <select
            name="faturamento"
            value={formData.faturamento}
            onChange={handleChange}
            required
            className="form-select"
          >
            <option value="">Selecione uma faixa</option>
            <option value="até 500 mil">Até R$ 100 mil</option>
            <option value="100 mil a 300 mil">R$ 100 mil a R$ 300 mil</option>
            <option value="300 mil a 600 mil">R$ 300 mil a R$ 600 mil</option>
            <option value="600 mil a 1 milhão">R$ 600 mil a R$ 1 milhão</option>
            <option value="1 a 5 milhões">R$ 1 a 5 milhões</option>
            <option value="acima de 5 milhões">Acima de R$ 5 milhões</option>
          </select>
        </label>

        <label>
          Segmento da empresa
          <input
            type="text"
            name="segmento"
            value={formData.segmento}
            onChange={handleChange}
            placeholder="Ex: Educação, Varejo, Tecnologia..."
            required
          />
        </label>

        <div className="form-submit">
          <button type="submit" className="button" disabled={loading}>
            {loading ? 'Enviando...' : 'Receber mais informações'}
          </button>
          <span className="form-feedback paragraph">{feedbackMessage}</span>
        </div>
      </form>
    </section>
  );
};

export default Contact;
