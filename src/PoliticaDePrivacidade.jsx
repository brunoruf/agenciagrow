import React from "react";
import { Link } from "react-router-dom";

export default function PoliticaDePrivacidade() {
  return (
    <div style={styles.container}>
      <Link to="/" className="button" style={styles.backButton}>
        Voltar para a Home Page
      </Link>
      <h1 style={styles.title}>Política de Privacidade</h1>
      <p style={styles.date}>Última atualização: 08/08/2025</p>

      <section style={styles.section}>
        <p>
          Esta Política de Privacidade descreve como <strong>Grow Creative Hub</strong> (“nós”, “nosso” ou “nossa”) coleta, usa e protege as informações pessoais dos usuários (“você”) de acordo com a <strong>Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018)</strong> – LGPD.
        </p>
      </section>

      <section style={styles.section}>
        <h2>1. Informações que coletamos</h2>
        <ul>
          <li>Informações fornecidas por você: nome, e-mail, telefone, endereço ou outros dados inseridos em formulários.</li>
          <li>Informações de navegação: endereço IP, tipo de navegador, páginas visitadas e tempo de permanência.</li>
          <li>Cookies e tecnologias semelhantes: usados para melhorar a experiência do usuário, personalizar conteúdo e analisar tráfego.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>2. Como usamos suas informações</h2>
        <ul>
          <li>Fornecer e aprimorar nossos serviços.</li>
          <li>Personalizar sua experiência no site.</li>
          <li>Enviar comunicações (quando autorizado).</li>
          <li>Cumprir obrigações legais ou regulatórias.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>3. Compartilhamento de informações</h2>
        <p>
          Não vendemos ou alugamos suas informações pessoais. Podemos compartilhá-las apenas:
        </p>
        <ul>
          <li>Com prestadores de serviço que auxiliam na operação do site.</li>
          <li>Quando exigido por lei ou autoridades competentes.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>4. Cookies</h2>
        <p>
          Utilizamos cookies para lembrar suas preferências e analisar desempenho e tráfego. Você pode desativar os cookies nas configurações do seu navegador, mas isso pode afetar a experiência no site.
        </p>
      </section>

      <section style={styles.section}>
        <h2>5. Seus direitos segundo a LGPD</h2>
        <p>Você pode:</p>
        <ul>
          <li>Confirmar a existência de tratamento de dados.</li>
          <li>Acessar, corrigir ou atualizar seus dados.</li>
          <li>Solicitar a exclusão de seus dados.</li>
          <li>Revogar o consentimento a qualquer momento.</li>
        </ul>
        <p>
          Para exercer seus direitos, envie um e-mail para:{" "}
          <a href="mailto:contato@growcreativehub.com.br" style={styles.link}>contato@growcreativehub.com.br</a>.
        </p>
      </section>

      <section style={styles.section}>
        <h2>6. Segurança</h2>
        <p>
          Adotamos medidas técnicas e organizacionais para proteger suas informações contra acesso não autorizado, perda ou alteração.
        </p>
      </section>

      <section style={styles.section}>
        <h2>7. Alterações nesta Política</h2>
        <p>
          Podemos atualizar esta Política periodicamente. A data da última atualização estará sempre indicada no início do documento.
        </p>
      </section>

      <section style={styles.section}>
        <h2>8. Contato</h2>
        <p>
          Se tiver dúvidas sobre esta Política de Privacidade ou sobre o tratamento de seus dados, entre em contato:{" "}
          <a href="mailto:contato@growcreativehub.com.br" style={styles.link}>contato@growcreativehub.com.br</a>
        </p>
      </section>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    color: "#FFF",
  },
  title: {
    fontSize: "28px",
    marginBottom: "5px",
    marginTop: "32px"
  },
  date: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "30px",
  },
  section: {
    marginBottom: "25px",
  },
  link: {
    color: "#007BFF",
    textDecoration: "underline",
  },
};
