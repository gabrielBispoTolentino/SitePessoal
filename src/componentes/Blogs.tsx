import { useNavigate } from 'react-router-dom';
import MiniCube from './MiniCube';
import './NavPages.css';

export default function Blogs() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <MiniCube />
      <button className="back-button" onClick={() => navigate('/')}>← Voltar</button>
      <h1>Blogs</h1>
      <div className="content">
        <p>Bem-vindo à seção de Blogs</p>
        <p>Aqui você encontrará meus artigos e posts sobre desenvolvimento.</p>
      </div>
    </div>
  );
}
