import styled from 'styled-components'
import Conteudo from './Componentes/Conteudo'
import Rodape from './Componentes/Rodape'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cabecalho from './Componentes/Cabecalho';
import Certificados from './Componentes/Certificados';


const MainEstilo = styled.div`
   background: #203e66;
`

function App() {

  return (
    <MainEstilo>
      <Router>
        <Cabecalho />
        <Routes>
          <Route path='/' element={<Conteudo/>}/>
          <Route path='certificados' element={<Certificados/>}/>
        </Routes>
        <Rodape />
      </Router>
    </MainEstilo>
  )
}

export default App
