import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Inicio'; 
import Login from './Login';
import Cadastro from './Cadastro';  
import Produto from './Produto';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;