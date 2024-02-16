import { SectionStyle } from './SectionStyle.jsx';

export const SectionPadrao = ({ children, titulo, corUser, existe }) => {
    return (
        <SectionStyle>
            <h1>{titulo}</h1>
            <div>
                {children}
            </div>
        </SectionStyle>
    );
};
