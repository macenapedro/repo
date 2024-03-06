import styled from 'styled-components'
import Conteudo from './Componentes/Conteudo'
import Rodape from './Componentes/Rodape'

const MainEstilo = styled.main`
   background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
`

function App() {

  return (
    <MainEstilo>
      <Conteudo />
      <Rodape />
    </MainEstilo>
  )
}

export default App
