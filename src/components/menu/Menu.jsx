import { MenuLink } from '../MenuLink/MenuLink';
import { Logo } from '../menuLogo/MenuLogo';
import {Section} from './MenuStyle';
export const Menu = () =>{
    return(
        <Section>
            <Logo/>
            <MenuLink/>
        </Section>
    )
}