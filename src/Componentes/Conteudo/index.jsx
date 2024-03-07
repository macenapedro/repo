import conteudos from './conteudo.json';
import './conteudo.scss'



const Conteudo = () => {
    return (
        <div className='conteudo'>
            {conteudos.map(item => <section key={item.id}><a href={item.urlV} target='_blank' rel='noreferer noopener'>
                <img src={item.src} alt={item.alt}/></a><div className='texto'>
                <h2>{item.titulo}</h2>
                <a href={item.url}>Link pro Github</a>
                </div>
                </section>
                )}
        </div >
    );
}

export default Conteudo
