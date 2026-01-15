import { useNavigate } from 'react-router-dom';
import MiniCube from './MiniCube';
import './NavPages.css';

export default function Projetos() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <MiniCube />
      <button className="back-button" onClick={() => navigate('/')}>← Voltar</button>
      <h1>Projetos</h1>
      <div className="content">
        <p>Bem-vindo à seção de Projetos</p>
        <p>Aqui você encontrará uma coleção dos meus melhores projetos e trabalhos.</p>
      </div>
    </div>
  );
}
