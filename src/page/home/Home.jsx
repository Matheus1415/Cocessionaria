import { Outlet, useLocation } from "react-router-dom";
import { Menu } from "../../components/menu/Menu";
import { SocialBar } from "../../components/socialNavNar/SocialNavBar";
import { SectionPadrao } from "../../components/section/Section";
import { Caixa } from '../../components/caixa/Container'

export const Home = () => {
    const location = useLocation().pathname;

    return (
        <>
            <SocialBar/>
            <Menu />
            {
                location !== '/' ? 
                    <Caixa>
                        <Outlet /> 
                    </Caixa> 
                :
                <Caixa>
                    <SectionPadrao titulo="Opaaaaaaaaaa">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum molestias a illo nemo nobis quam at consequuntur neque perspiciatis unde quas natus mollitia doloremque provident, numquam dignissimos repellat quis maxime!
                    </SectionPadrao>
                </Caixa>
            }
        </>
    );
};
