import { Outlet, useLocation } from "react-router-dom";
import { Menu } from "../../components/menu/Menu";
import { SocialBar } from "../../components/socialNavNar/SocialNavBar";
import { SectionPadrao } from "../../components/section/Section";
import { Caixa } from '../../components/caixa/Container'
import { Form } from "../../components/form/form";
import { Input } from "../../components/input/Input";
import { Carrosel } from "../../components/carrosel/Carrosel";
import { CardGrup } from "../../components/grupCard/GrupCard";


export const Home = () => {
    const location = useLocation().pathname;
    const images = [
        'Bg-carro.png',
        'Bg-carro2.png',
        'Bg-carro3.png',
        'Bg-carro4.png',
      ]

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
                    <SectionPadrao titulo="Seja Bem vindo ao nosso conssorcio">
                        <Carrosel images={images}/>

                        <Form titulo="Entre em contato com-nosco">
                            <Input 
                                type="text" 
                                idType="text" 
                                placeholder="Digite seu nome completo"
                            />
                            <Input 
                                type="email" 
                                idType="email" 
                                placeholder="Digite seu email"
                            />
                            <Input 
                                type="tel" 
                                idType="tel" 
                                placeholder="Digite seu telefone"
                            />
                            <Input 
                                type="password" 
                                idType="senha"                             
                                placeholder="Digite sua senha"
                            />
                        </Form>
                    </SectionPadrao>

                    <SectionPadrao titulo="Nossos diferenciais">
                        <CardGrup>
                            
                        </CardGrup>
                    </SectionPadrao>
                </Caixa>
            }
        </>
    );
};
