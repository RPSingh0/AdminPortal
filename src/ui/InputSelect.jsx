import styled from "styled-components";
import {commonInput, StyledInputContainer, StyledInputLabel} from "../styles/InputFieldStyles";
import ErrorList from "./ErrorList";

const StyledSelect = styled.select`
    ${commonInput};
    font-size: 1.2rem;
    background-color: white;
`;


function InputSelect({id, name, label, optionList, errors, ...props}) {
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
            {errors && <ErrorList errors={errors}/> }
        </StyledInputContainer>
    );
}

export default InputSelect;