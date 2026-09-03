import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Inicio'; 
import Login from './Login';
import Cadastro from './Cadastro';  
import Produto from './Produto';
import Carrinho from './Carrinho';
import SobreNos from './SobreNos';
import Contato from './Contato';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota da página inicial */}
        <Route path="/" element={<Inicio />} />
        
        {/* Rota da página de login */}
        <Route path="/login" element={<Login />} />
        
        {/* Rota da página de cadastro */}
        <Route path="/cadastro" element={<Cadastro />} />

        {/* Rota dinâmica: o ":id" aceita qualquer número ou texto */}
        <Route path="/produto/:id" element={<Produto />} />

        {/* Rota da página do carrinho */}
        <Route path="/carrinho" element={<Carrinho />} />

        {/* Rota da página "Sobre Nós" */}
        <Route path="/sobre-nos" element={<SobreNos />} />

        {/* Rota da página contato*/}
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;