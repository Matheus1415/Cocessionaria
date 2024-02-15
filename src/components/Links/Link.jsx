import { Link as RouterLink, useLocation} from "react-router-dom"
import { Link } from './LinkStyle.jsx'
export const MenuIcon = ({nome, pageLink}) =>{
    const location = useLocation().pathname
    const style = {
        color: location === pageLink ? "#02264d" : '#f8f9fa',
        textDecoration: 'none'
    }  

    return(
        <Link>
            <RouterLink style={style} to={pageLink}>{nome}</RouterLink>
        </Link>
    )
}