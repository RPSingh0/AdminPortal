import styled from "styled-components";
import {commonInput, StyledInputContainer, StyledInputLabel} from "../styles/InputFieldStyles";

const StyledInput = styled.input`
    ${commonInput};
`;

function InputField({id, name, label, ...props}) {
    return (
        <StyledInputContainer>
            <StyledInputLabel htmlFor={id}>
                {label.toUpperCase()}
            </StyledInputLabel>
            <StyledInput id={id} name={name} {...props}/>
        </StyledInputContainer>
    );
}

export default InputField;