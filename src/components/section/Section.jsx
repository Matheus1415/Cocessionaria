import { SectionStyle } from './SectionStyle.jsx';

export const SectionPadrao = ({ children, titulo}) => {
    return (
        <SectionStyle>
            <h1>{titulo}</h1>
            <div>
                {children}
            </div>
        </SectionStyle>
    );
};
