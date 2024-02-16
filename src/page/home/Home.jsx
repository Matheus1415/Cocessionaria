import { Outlet, useLocation } from "react-router-dom";
import { Menu } from "../../components/menu/Menu";
import { SocialBar } from "../../components/socialNavNar/SocialNavBar";
import { SectionPadrao } from "../../components/section/Section";
import { Caixa } from '../../components/caixa/Container'
import { Form } from "../../components/form/form";
import { Input } from "../../components/input/Input";


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
                        <Form titulo="Entre em contato com-nosco">
                            <Input type="text" idType="text" placeholder="Digite seu nome completo"/>
                            <Input type="email" idType="email" placeholder="Digite seu email"/>
                            <Input type="tel" idType="tel" placeholder="Digite seu telefone"/>
                            <Input type="password" idType="senha" placeholder="Digite sua senha"/>
                        </Form>
                    </SectionPadrao>
                </Caixa>
            }
        </>
    );
};
