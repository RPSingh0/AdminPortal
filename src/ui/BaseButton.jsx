import styled, {css} from "styled-components";

const buttonSizes = {
    small: css`
        font-size: 1.2rem;
        padding: 0.4rem 0.8rem;
        font-weight: 600;
    `,
    medium: css`
        font-size: 1.4rem;
        padding: 1.2rem 1.6rem;
        font-weight: 500;
    `,
    large: css`
        font-size: 1.6rem;
        padding: 1.2rem 2.4rem;
        font-weight: 500;
    `,
}

const buttonVariations = {
    primary: css`
        background-color: var(--color-brand-normal);

        &:hover {
            background-color: var(--color-brand-hover);
        }
    `,
    secondary: css`
        background: var(--color-button-secondary);

        &:hover {
            background-color: var(--color-button-secondary-hover);
        }
    `
};

const BaseButton = styled.button`
    color: var(--color-text-whitesmoke);
    border: none;
    border-radius: 9px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
    text-transform: uppercase;
    text-align: center;

    &:disabled,
    &:disabled:hover {
        background-color: var(--color-button-disabled);
        cursor: not-allowed;
    }

    ${props => buttonSizes[props.size]}
    ${props => buttonVariations[props.variation]}
`;

BaseButton.defaultProps = {
    size: "small",
    variation: "primary"
}

export default BaseButton;