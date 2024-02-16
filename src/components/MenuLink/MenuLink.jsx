import { UlStyle } from './MenuLinkStyle.jsx';

export const MenuLink = ({children}) =>{
    return(
        <UlStyle>
            <li key={children}>{children}</li>
        </UlStyle>
    )
}