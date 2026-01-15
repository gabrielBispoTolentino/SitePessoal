import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './componentes/Home';
import Blogs from './componentes/Blogs';
import Github from './componentes/Github';
import Projetos from './componentes/Projetos';
import Contato from './componentes/Contato';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/github" element={<Github></Github>} />
        <Route path="/projetos" element={<Projetos></Projetos>} />
        <Route path="/contato" element={<Contato></Contato>} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
