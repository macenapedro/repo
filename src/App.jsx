import styled from 'styled-components'
import Conteudo from './Componentes/Conteudo'
import Rodape from './Componentes/Rodape'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cabecalho from './Componentes/Cabecalho';
import Certificados from './Componentes/Certificados';


const MainEstilo = styled.div`
   background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
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
