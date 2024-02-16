import { SectionStyle } from './SectionStyle.jsx'
export const SectionPadrao = ({children, titulo, img}) =>{

    return(
        <SectionStyle>
            <h1>{titulo}</h1>
            <div>
            {children}
            </div>
        </SectionStyle>
    )
}