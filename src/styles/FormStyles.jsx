import styled, {css} from "styled-components";

export const commonFormParentContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
`;

export const commonFormContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

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

export const StyledFormHeading = styled.p`
    color: #171f46;
    font-size: 3rem;
`;