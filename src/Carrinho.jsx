import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trash2 } from 'lucide-react';
import produto1 from "./assets/produto1.png";
import './Carrinho.css';

export default function Carrinho() {
  const itens = [
    { id: 1, img: produto1, nome: "Body + Corpete Bege", preco: "R$ 105,00", quantidade: 1 }
  ];

  return (
    <div className="carrinho-container">
      <div className="carrinho-header-pagina">
        <Link to="/" className="btn-voltar">
          <ArrowLeft size={20} /> Voltar para a loja
        </Link>
        <h1>Meu Carrinho</h1>
      </div>

      {itens.length === 0 ? (
        <p className="carrinho-vazio">Seu carrinho está vazio.</p>
      ) : (
        <div className="carrinho-conteudo">
          <div className="carrinho-lista">
            {itens.map((item) => (
              <div key={item.id} className="carrinho-item-pagina">
                <img src={item.img} alt={item.nome} />
                <div className="info-item">
                  <h3>{item.nome}</h3>
                  <p className="preco-item">{item.preco}</p>
                  <span>Qtd: {item.quantidade}</span>
                </div>
                <button className="btn-remover">
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          <div className="carrinho-resumo">
            <h2>Resumo do Pedido</h2>
            <div className="linha-resumo">
              <span>Subtotal</span>
              <span>R$ 105,00</span>
            </div>
            <div className="linha-resumo">
              <span>Frete</span>
              <span>Grátis</span>
            </div>
            <div className="linha-resumo total">
              <strong>Total</strong>
              <strong>R$ 105,00</strong>
            </div>
            <button className="btn-finalizar">Finalizar Compra</button>
          </div>
        </div>
      )}
    </div>
  );
}