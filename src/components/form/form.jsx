import { FomrStyle } from './FomrStyle.jsx'

export const Form = ({children}) =>{
    return(
        <FomrStyle>
            <form action="">
                {children}
            </form>
        </FomrStyle>
    )
}