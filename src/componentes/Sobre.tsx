// componentes/Sobre.tsx
import { useNavigate } from 'react-router-dom';
import MiniCube from './MiniCube';
import './sobre.css';

export default function Sobre() {
    const navigate = useNavigate();

    return (
        <div className="page-container">
            <MiniCube />
            <h1>Sobre Mim</h1>

            <div className="bento-grid">
                {/* Card Principal - Bio */}
                <div className="bento-card card-large">
                    <h2>Olá!</h2>
                    <p>
                        Sou Gabriel Bispo, desenvolvedor full stack apaixonado por criar
                        experiências digitais incríveis
                    </p>
                    <p>
                        Atualmente focado em React, TypeScript e Node.js. Adoro explorar
                        novas tecnologias e criar projetos que fazem a diferença.
                    </p>
                </div>

                {/* Card Foto */}
                <div className="bento-card card-medium card-photo">
                    <div className="photo-placeholder">
                        <span>📸</span>
                    </div>
                    <p className="photo-caption">Gabriel Bispo</p>
                </div>

                {/* Card Stats */}
                <div className="bento-card card-small card-stat">
                    <div className="stat-number">5+</div>
                    <div className="stat-label">Projetos</div>
                </div>

                <div className="bento-card card-small card-stat">
                    <div className="stat-number">3</div>
                    <div className="stat-label">Anos Codando</div>
                </div>

                {/* Card Localização */}
                <div className="bento-card card-medium card-location">
                    <span className="location-icon">📍</span>
                    <div>
                        <h3>Localização</h3>
                        <p>Alagoinhas, Bahia, BR</p>
                    </div>
                </div>

                {/* Card Tecnologias Favoritas */}
                <div className="bento-card card-medium card-tech">
                    <h3>Tech Stack</h3>
                    <div className="tech-icons">
                        <div className="tech-item react">
                            <span>React</span>
                        </div>
                        <div className="tech-item typescript">
                            <span>TypeScript</span>
                        </div>
                        <div className="tech-item vite">
                            <span>Vite</span>
                        </div>
                        <div className="tech-item nodejs">
                            <span>Node.js</span>
                        </div>
                    </div>
                </div>

                {/* Card Hobbies */}
                <div className="bento-card card-medium card-hobbies">
                    <h3>Hobbies</h3>
                    <ul>
                        <li>Doomscroling</li>
                        <li>League of legends</li>
                        <li>RPPGs</li>
                    </ul>
                </div>

                {/* Card CTA */}
                <div className="bento-card card-large card-cta">
                    <h3>Vamos trabalhar juntos?</h3>
                    <p>Estou sempre aberto a novos projetos e oportunidades.</p>
                    <button onClick={() => navigate('/contato')}>
                        Entre em Contato →
                    </button>
                </div>
            </div>
        </div>
    );
}