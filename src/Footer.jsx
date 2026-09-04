import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-conteudo">

        <div className="footer-marca">
          <h2>Nana e Mimi</h2>
          <span>MODA INFANTIL</span>
          <p>Estilo para os pequenos, conforto para viver cada momento.</p>
        </div>

        <nav className="footer-links">
          <a href="/">Início</a>
          <a href="/sobre-nos">Sobre nós</a>
          <a href="/contato">Contato</a>
        </nav>

      </div>
    </footer>
  );
}

export default Footer;