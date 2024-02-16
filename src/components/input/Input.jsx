import { InputStyle } from './InputStyle.jsx';

export const Input = ({ type, idType, placeholder }) => {

    return (
        <InputStyle>
            <input 
                type={type}
                id={idType}
                placeholder={placeholder}
            />
        </InputStyle>
    );
};
