import { Outlet, useLocation } from "react-router-dom";
import { Menu } from "../../components/menu/Menu";
import { SocialBar } from "../../components/socialNavNar/SocialNavBar";
import { SectionPadrao } from "../../components/section/Section";
import { Caixa } from '../../components/caixa/Container'
import { Form } from "../../components/form/form";


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
                    <SectionPadrao titulo="Seja Bem vindo">
                        <img src={require("../../assent/Bg-carro.png")} alt="" />
                        <Form/>
                    </SectionPadrao>
                </Caixa>
            }
        </>
    );
};
