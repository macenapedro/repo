import styled from 'styled-components'

const infos = [
    {
        src: "./Imagens/linkedin_resized_resized.png",
        titulo: 'Linkedin',
        url: "https://www.linkedin.com/in/pedro-augusto-macena-de-souza-b09569144/",
        id: 1
        },
{
        src: "./Imagens/github_resized_resized.png",
        titulo: 'GitHub',
        url: "https://github.com/macenapedro",
        id: 2
    }
]

const RodapeEstilizado = styled.footer`
    display: flex;
    padding: 20px 12%;
    gap: 50px;
    @media (max-width: 1200px){
        display: flex;
        justify-content: center;
    }
    
`

const Botoes = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const LinkEstilizados = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: #aaadb9;
    img{
        padding-right: 0.5rem;
    }

`

const Rodape = ()  =>
{
    return(
        <RodapeEstilizado>
            <Botoes>
                {infos.map(info => (<LinkEstilizados href={info.url} key={info.id} target='_blank' rel='noreferrer noopener'><img src={info.src} alt=''/>
                {info.titulo}
                </LinkEstilizados>))}
            </Botoes>
        </RodapeEstilizado>
    )
}

export default Rodape