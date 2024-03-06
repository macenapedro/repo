import conteudos from './conteudo.json';
import './conteudo.scss'



const Conteudo = () => {
    return (
        <div className='conteudo'>
            {conteudos.map(item => <section key={item.id}><img src={item.src} alt={item.alt} /><h1>{item.titulo}</h1></section>)}
        </div >
    );
}

export default Conteudo
