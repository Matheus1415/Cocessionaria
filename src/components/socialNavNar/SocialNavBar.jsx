import { SocialIcons } from '../iconSocial/IconSocial.jsx'
import { Lang } from '../langSelect/LangSelect.jsx'
import { SocialBarStyle } from './SocialBarStyle.jsx'

export const SocialBar = () =>{
    return(
        <SocialBarStyle>
            <Lang/>
            <SocialIcons/>
        </SocialBarStyle>
    )
}