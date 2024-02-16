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
                    <SectionPadrao titulo="paaaaaaaaaaaa">
                        <img src={require("../../assent/Bg-carro.png")} alt="" />

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quibusdam inventore quasi enim praesentium reiciendis iste molestiae doloribus aliquam! Cum, eligendi? Voluptates debitis, quibusdam dolores culpa perspiciatis ratione rem repellendus.</p>
                    </SectionPadrao>
                </Caixa>
            }
        </>
    );
};
