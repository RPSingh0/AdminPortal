import styled, {css} from "styled-components";

const buttonSizes = {
    small: css`
        font-size: 1.2rem;
        padding: 0.4rem 0.8rem;
        text-transform: uppercase;
        font-weight: 600;
        text-align: center;
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
    fullWidth: css`
        font-size: 1.8rem;
        padding: 1.2rem 3.2rem;
        font-weight: 500;
        width: 100%;
    `
}

const buttonVariations = {
    primary: css`
        color: whitesmoke;
        background-color: #0b69ff;

        &:hover {
            background-color: #0a48ff;
        }
    `,
    cta: css`
        color: whitesmoke;
        background: #2dca73;

        &:hover {
            background-color: #208d6a;
        }
    `
};

const BaseButton = styled.button`
    border: none;
    border-radius: 9px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
    text-transform: uppercase;
    transition: background-color 0.5s ease;

    ${props => buttonSizes[props.size]}
    ${props => buttonVariations[props.variation]}
`;

BaseButton.defaultProps = {
    size: "small",
    variation: "primary"
}

export default BaseButton;