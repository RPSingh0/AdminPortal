import styled from "styled-components";
import {commonInput, StyledInputContainer, StyledInputLabel} from "../styles/InputFieldStyles";

const StyledInput = styled.textarea`
    ${commonInput};
    resize: none;
`;

function InputTextArea({id, name, label, ...props}) {
    return (
        <StyledInputContainer>
            <StyledInputLabel htmlFor={id}>
                {label.toUpperCase()}
            </StyledInputLabel>
            <StyledInput id={id} name={name} rows={3} autoComplete={"on"} {...props}/>
        </StyledInputContainer>
    );
}

export default InputTextArea;