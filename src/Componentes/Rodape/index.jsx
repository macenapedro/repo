import styled from 'styled-components'

const infos = [
    {
        titulo: "LinkedIn",
        url: "https://www.linkedin.com/in/pedro-augusto-macena-de-souza-b09569144/",
        id: 1
        },
{
        titulo: "GitHub",
        url: "https://github.com/macenapedro",
        id: 2
    }
]

const RodapeEstilizado = styled.footer`
    display: flex;
    background-color: rgb(180, 180, 180);
    padding: 20px;
    gap: 50px;
`

const Botoes = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    
`

const LinkEstilizados = styled.a`    
    border: solid 2px red;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
`

const Rodape = ()  =>
{
    return(
        <RodapeEstilizado>
            <Botoes>
                {infos.map(info => (<LinkEstilizados href={info.url} key={info.id} target='_blank' rel='noreferrer'>
                    {info.titulo}
                </LinkEstilizados>))}
            </Botoes>            
            <p>Telefone:<br/> (31) 9 7587-472 </p>
            Desenvolvido por Pedro Macena
        </RodapeEstilizado>
    )
}

export default Rodape