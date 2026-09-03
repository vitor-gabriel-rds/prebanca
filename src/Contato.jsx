import React from 'react';
import { Link } from 'react-router-dom';
import { CircleUserRound, ShoppingCart, Search, ArrowLeft, MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';
import logo from "./assets/logo.jpg";
import './Contato.css';

export default function Contato() {
  return (
    <div className="app">
      {/* Barra de Navegação */}
      <div className="navbar">
        <Link to="/">
          <img src={logo} alt="Logo Nana&Mimi" className="logo" />
        </Link>

        <div className="menu">
          <Link to="/sobre-nos" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span>Sobre nós</span>
          </Link>
          <Link to="/contato" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span>Contato</span>
          </Link>
          <span>Roupas</span>
        </div>

        <div className="container-pesquisa">
          <input 
            type="text" 
            placeholder="Buscar produto..." 
            className="input-pesquisa"
          />
          <Search size={18} className="icone-lupa" />
        </div>

        <div className="icons">
          <Link to="/login" style={{ color: 'inherit' }}>
            <CircleUserRound size={30} />
          </Link>
          <Link to="/carrinho" style={{ color: 'inherit' }}>
            <ShoppingCart size={30} />
          </Link>
        </div>
      </div>

      {/* Conteúdo de Contato Centralizado */}
      <main className="contato-container">
        <Link to="/" className="btn-voltar">
          <ArrowLeft size={18} /> Voltar para a Loja
        </Link>

        <div className="contato-conteudo-central">
          <h1>Contato</h1>

          <div className="contato-texto">
            <p>
              Tem dúvidas sobre tamanhos, trocas, prazos de entrega ou quer saber mais sobre nossa coleção? Estamos sempre prontas para ajudar você com todo o carinho que a sua família merece!
            </p>
            <p>
              Adoramos conversar com quem compartilha do nosso amor pela moda infantil. Entre em contato conosco através dos canais abaixo:
            </p>
          </div>

          <div className="info-cards-central">
            <div className="card-item-central">
              <Phone size={22} />
              <div>
                <strong>WhatsApp</strong>
                <p>(11) 99999-9999</p>
              </div>
            </div>

            <div className="card-item-central">
              <Mail size={22} />
              <div>
                <strong>E-mail</strong>
                <p>contato@nanaemimi.com.br</p>
              </div>
            </div>

            <div className="card-item-central">
              <Instagram size={22} />
              <div>
                <strong>Instagram</strong>
                <p>@nanaemimikids</p>
              </div>
            </div>

            <div className="card-item-central">
              <Clock size={22} />
              <div>
                <strong>Horário de Atendimento</strong>
                <p>Segunda a Sexta, das 9h às 18h</p>
              </div>
            </div>

            <div className="card-item-central">
              <MapPin size={22} />
              <div>
                <strong>Localização</strong>
                <p>[Insira aqui a localização / endereço]</p>
              </div>
            </div>
          </div>

          <p className="slogan">
            Nana&Mimi — Estilo para os pequenos, conforto para viver cada momento.
          </p>
        </div>
      </main>
    </div>
  );
}