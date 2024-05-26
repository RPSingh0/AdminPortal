import styled from "styled-components";
import {commonInput, StyledInputContainer, StyledInputLabel} from "../styles/InputFieldStyles";
import ErrorList from "./ErrorList";

const StyledInput = styled.textarea`
    ${commonInput};
    resize: none;
`;

function InputTextArea({id, name, label, errors, ...props}) {
    return (
        <StyledInputContainer>
            <StyledInputLabel htmlFor={id}>
                {label.toUpperCase()}
            </StyledInputLabel>
            <StyledInput id={id} name={name} rows={3} autoComplete={"on"} {...props}/>
            {errors && <ErrorList errors={errors}/> }
        </StyledInputContainer>
    );
}

export default InputTextArea;