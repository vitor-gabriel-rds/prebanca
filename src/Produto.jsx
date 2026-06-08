import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Produto.css";

// Importe as imagens novamente para a tela de detalhes
import produto1 from "./assets/produto1.png";
import produto2 from "./assets/produto2.png";
import produto3 from "./assets/produto3.png";
import produto4 from "./assets/produto4.png";

const listaProdutos = [
  { id: 1, img: produto1, nome: "Body + Corpete Bege", preco: "R$ 105,00", desc: "Lindo body com corpete bege, perfeito para ocasiões especiais. Tecido confortável de alta durabilidade." },
  { id: 2, img: produto2, nome: "Camisa Social", preco: "R$ 59,90", desc: "Camisa social elegante de algodão. Ideal para o dia a dia no trabalho ou eventos formais." },
  { id: 3, img: produto3, nome: "Calça Jogger", preco: "R$ 89,90", desc: "Calça jogger super estilosa com ajuste na cintura. Conforto e moda andam juntos aqui." },
  { id: 4, img: produto4, nome: "Moletom Cinza", preco: "R$ 85,00", desc: "Moletom cinza flanelado perfeito para os dias mais frios. Caimento perfeito e muito quentinho." },
];

export default function Produto() {
  const { id } = useParams(); // Pega o ID que veio na URL
  
  // Encontra o produto correspondente ao ID da URL
  const produto = listaProdutos.find((item) => item.id === parseInt(id));

  // Se não encontrar o produto (por segurança)
  if (!produto) {
    return <h2>Produto não encontrado!</h2>;
  }

  return (
    <div className="produto-detalhes-container">
      <Link to="/" className="btn-voltar-home">← Voltar para a Loja</Link>
      
      <div className="produto-wrapper">
        <div className="produto-imagem">
          <img src={produto.img} alt={produto.nome} />
        </div>
        
        <div className="produto-info">
          <h1>{produto.nome}</h1>
          <p className="produto-preco">{produto.preco}</p>
          <p className="produto-descricao">{produto.desc}</p>
          
          <div className="opcoes-compra">
            <label htmlFor="tamanho">Tamanho:</label>
            <select id="tamanho">
              <option>P</option>
              <option>M</option>
              <option>G</option>
            </select>
          </div>

          <button className="btn-comprar" onClick={() => alert("Produto adicionado ao carrinho! 🛒")}>
            Comprar Agora
          </button>
        </div>
      </div>
    </div>
  );
}