import { useNavigate } from 'react-router-dom';
import MiniCube from './MiniCube';
import './NavPages.css';

export default function Github() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <MiniCube />
      <button className="back-button" onClick={() => navigate('/')}>← Voltar</button>
      <h1>GitHub</h1>
      <div className="content">
        <p>Bem-vindo à seção de GitHub</p>
        <p>Aqui você pode acessar meus repositórios e projetos open source.</p>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="external-link">
          Ir para meu GitHub
        </a>
      </div>
    </div>
  );
}
