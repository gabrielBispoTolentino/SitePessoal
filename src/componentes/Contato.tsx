import { useNavigate } from 'react-router-dom';
import MiniCube from './MiniCube';
import './NavPages.css';

export default function Contato() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <MiniCube />
      <h1>Contato</h1>
      <div className="content">
        <p>Bem-vindo à seção de Contato</p>
        <p>Entre em contato comigo através dos seguintes canais:</p>
        <ul>
          <li>Email: seu-email@example.com</li>
          <li>LinkedIn: seu-linkedin</li>
          <li>Twitter: seu-twitter</li>
        </ul>
      </div>
    </div>
  );
}
