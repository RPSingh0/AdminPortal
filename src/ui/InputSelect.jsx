import styled from "styled-components";

const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 60%;

    @media (max-width: 600px) {
        width: 80%;
    }

    @media (max-width: 425px) {
        width: 90%;
    }

    @media (max-width: 375px) {
        width: 100%;
    }
`;

const StyledSelect = styled.select`
    border: 1px solid #dbe3eb;
    padding: 1.6rem;
    color: #252c51;
    font-size: 1.6rem;
    width: 100%;
    background-color: white;

    &:focus {
        outline: none;
    }
`;

const StyledInputLabel = styled.label`
    font-size: 1.2rem;
    color: #7e858e;
    font-weight: bold;
`;

function InputSelect({id, name, label, optionList, defaultOptionIndex}) {
    return (
        <StyledInputContainer>
            <StyledInputLabel htmlFor={id}>
                {label.toUpperCase()}
            </StyledInputLabel>
            <StyledSelect id={id} name={name}>
                {optionList.map(option =>
                    <option>{option}</option>
                )}
            </StyledSelect>
        </StyledInputContainer>
    );
}

export default InputSelect;