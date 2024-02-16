import React from 'react';
import { LinkPage } from '../Links/Link';
import { Logo } from '../menuLogo/MenuLogo';
import { Section } from './MenuStyle';
import { MenuLink } from '../MenuLink/MenuLink'; 

export const Menu = () => {
    return (
        <Section>
            <Logo />
            <MenuLink>
                <LinkPage nome="Home" pageLink="/" />
                <LinkPage nome="Sobre" pageLink="/sobre" />
                <LinkPage nome="Contato" pageLink="/contato" />
                <LinkPage nome="Loja" pageLink="/lojax" />
            </MenuLink>
        </Section>
    );
};
