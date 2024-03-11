import './certificados.scss'

const arquivos = [
  {
    index: '1',
    src: './Imagens/Certificado Alura_page-0001.jpg'
  },
  {
    index: '2',
    src: './Imagens/Certificado Alura_page-0002.jpg'
  },
]

export default function Certificados () {
    return(
      <section>
        {arquivos.map(arquivo => (<div key={arquivo.index}><img src={arquivo.src} alt='' /></div>))}
      </section>
    );
}