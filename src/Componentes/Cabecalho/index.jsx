import './cabecalho.scss';
import { Link } from 'react-router-dom'

export default function Cabecalho (){
    const rotas = [{
        label: 'Início',
        to: '/'
      }, {
        label: 'Certificados',
        to: '/certificados'
      }];
    return(
        <header>
            <nav>
                <ul>
                    {rotas.map((rota, index) => (
                        <li key={index}>
                            <Link to={rota.to}>
                                {rota.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}