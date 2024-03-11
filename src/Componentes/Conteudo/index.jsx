import conteudos from './conteudo.json';
import './conteudo.scss';

const Conteudo = () => {
    return (
        <main>
            {conteudos.map(item => <section key={item.id}>
                <a href={item.urlV} target={ item.urlV == '/' ? '' : '_blank'} rel='noopener noreferrer'>
                <img src={item.src} alt={item.alt}></img>
                </a>
                <div>
                <h2>{item.titulo}</h2>
                <a target='_blank' rel='noopener noreferrer' href={item.urlG}>Github</a>
                </div>
                </section>
                )}
        </main>
    );
}

export default Conteudo
