import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { CircleUserRound, ShoppingCart, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import "swiper/css";
import React from "react";
import "./Inicio.css";
import { useCarrinho } from './CarrinhoContext';

import slider1 from "./assets/slider1.png";
import slider2 from "./assets/slider2.png";
import produto1 from "./assets/produto1.png";
import produto2 from "./assets/produto2.png";
import produto3 from "./assets/produto3.png";
import produto4 from "./assets/produto4.png";
import logo from "./assets/logo.jpg";

const listaProdutos = [
  { id: 1, img: produto1, nome: "Body + Corpete Bege", preco: "R$ 105,00" },
  { id: 2, img: produto2, nome: "Camisa Social", preco: "R$ 59,90", precoAntigo: "R$ 119,90" },
  { id: 3, img: produto3, nome: "Calça Jogger", preco: "R$ 89,90"},
  { id: 4, img: produto4, nome: "Moletom Cinza", preco: "R$ 85,00"},
];

export default function Inicio() {
  // 2. Puxa as informações e a função do carrinho
  const { carrinho } = useCarrinho();
  const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);

  return (
    <div className="app">

      {/* barra de navegação */}
      <div className="navbar">
        <img src={logo} alt="Logo" className="logo" />

        <div className="menu">
          <Link to="/sobre-nos" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span>Sobre nós</span>
          </Link>
          <Link to="/contato" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span>Contato</span>
          </Link>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span>Roupas</span>
          </Link>
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
          <Link to="/carrinho" style={{ color: 'inherit', position: 'relative' }}>
            <ShoppingCart size={30} />
            {/* Bolinha com a quantidade no ícone do carrinho */}
            {totalItens > 0 && (
              <span style={{
                position: 'absolute',
                top: '-5px',
                right: '-8px',
                background: '#ff3b30',
                color: 'white',
                borderRadius: '50%',
                padding: '2px 6px',
                fontSize: '11px',
                fontWeight: 'bold'
              }}>
                {totalItens}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* banner */}
      <div className="banner">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          <SwiperSlide>
            <img src={slider1} alt="slider1" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={slider2} alt="slider2" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* barrinha de frete */}
      <div className="info-barra">
        <div> 💳 Parcele em até 12x</div>
        <div> 🚛 Frete grátis acima de R$199</div>
        <div> 🛡️ Site seguro</div>
        <div> 🎯 Produto de qualidade</div>
      </div>

      <div className="produtos">
        {listaProdutos.map((item) => (
          <div key={item.id} className="card-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Link to={`/produto/${item.id}`} className="card-link" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
              <div className="card">
                <img src={item.img} alt={item.nome} />
                <p className="nome">{item.nome}</p>
                <p className="preco-antigo"><del>{item.precoAntigo}</del></p>
                <p className="preco">{item.preco}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
}