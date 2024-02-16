import { IconsStyle } from './IconsStyle.jsx'
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined, YoutubeOutlined } from '@ant-design/icons';
export const SocialIcons = () =>{
    const style = {
        fontSize:"23px",
        padding: "10px"
    }
    return(
        <IconsStyle>
            <FacebookOutlined style={style}/>
            <TwitterOutlined  style={style} />
            <InstagramOutlined  style={style} />
            <LinkedinOutlined  style={style} />
            <YoutubeOutlined  style={style} />
        </IconsStyle>
    )
}