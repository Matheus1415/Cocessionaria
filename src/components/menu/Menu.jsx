import React from 'react';
import { LinkPage } from '../links/Link';
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
                <LinkPage nome="Loja" pageLink="/loja" />
            </MenuLink>
        </Section>
    );
};
