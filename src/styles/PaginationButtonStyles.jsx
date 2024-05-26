import styled from "styled-components";

export const StyledButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    cursor: pointer;
    width: max-content;
`;

export const StyledButtonText = styled.p`
    font-size: 1.6rem;
    color: var(--color-brand-normal);
`;

export const StyledButtonIcon = styled.img`
    width: 1rem;
`;