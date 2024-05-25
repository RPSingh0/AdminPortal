import styled from "styled-components";

const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
`;

const StyledInput = styled.input`
    border: 1px solid #dbe3eb;
    padding: 1.6rem;
    color: #252c51;
    width: 100%;

    &:focus {
        outline: none;
    }

    &:disabled {
        background-color: lightgrey;
    }
`;

const StyledInputLabel = styled.label`
    font-size: 1.2rem;
    color: #7e858e;
    font-weight: bold;
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