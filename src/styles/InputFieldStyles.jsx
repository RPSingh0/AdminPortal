import styled, {css} from "styled-components";

export const commonInput = css`
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

export const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
`;

export const StyledInputLabel = styled.label`
    font-size: 1.2rem;
    color: #7e858e;
    font-weight: bold;
`;