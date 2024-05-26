import styled from "styled-components";
import {commonInput, StyledInputContainer, StyledInputLabel} from "../styles/InputFieldStyles";
import ErrorList from "./ErrorList";

const StyledInput = styled.input`
    ${commonInput};
`;

function InputField({id, name, label, errors, ...props}) {
    return (
        <StyledInputContainer>
            <StyledInputLabel htmlFor={id}>
                {label.toUpperCase()}
            </StyledInputLabel>
            <StyledInput id={id} name={name} {...props}/>
            {errors && <ErrorList errors={errors}/> }
        </StyledInputContainer>
    );
}

export default InputField;