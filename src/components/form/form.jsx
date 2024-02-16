import { FomrStyle } from './FomrStyle.jsx'
import { Botao } from '../botao/Botao.jsx'

export const Form = ({children, titulo}) =>{
    return(
        <FomrStyle>
            <h1>{titulo}</h1>
            <form action="">
                {children}
                <Botao name="Enviar"/>
            </form>
        </FomrStyle>
    )
}