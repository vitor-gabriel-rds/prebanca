import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { CircleUserRound, ShoppingCart, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import "swiper/css";
import React from "react";
import "./Inicio.css";
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
  return (
    <div className="app">

      {/* barra de navegação */}
      <div className="navbar">
        <img src={logo} alt="Logo" className="logo" />

        <div className="menu">
          <span>Novidades</span>
          <span>Coleções</span>
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
          <Link to="/login">
            <CircleUserRound size={30} />
          </Link>
          <ShoppingCart size={30} />
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
        {listaProdutos.map((item, index) => (
        <Link to={`/produto/${item.id}`} key={index} className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card">
            <img src={item.img} alt={item.nome} />
            <p className="nome">{item.nome}</p>
            <p className="preco-antigo"><del>{item.precoAntigo}</del></p>
            <p className="preco">{item.preco}</p>
          </div>
        </Link>
      ))}
    </div>

    </div>
  );
}

