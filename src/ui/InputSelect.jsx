import styled from "styled-components";
import {commonInput, StyledInputContainer, StyledInputLabel} from "../styles/InputFieldStyles";

const StyledSelect = styled.select`
    ${commonInput};
    font-size: 1.6rem;
    background-color: white;
`;


function InputSelect({id, name, label, optionList, ...props}) {
    return (
        <StyledInputContainer>
            <StyledInputLabel htmlFor={id}>
                {label.toUpperCase()}
            </StyledInputLabel>
            <StyledSelect id={id} name={name} {...props}>
                {optionList.map(option =>
                    <option value={option.toLowerCase()}>{option}</option>
                )}
            </StyledSelect>
        </StyledInputContainer>
    );
}

export default InputSelect;