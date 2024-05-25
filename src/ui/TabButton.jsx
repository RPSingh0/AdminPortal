import styled, {css} from "styled-components";

const tabButtonVariation = {
    selected: css`
        color: var(--color-text-whitesmoke);
        background-color: var(--color-brand-normal);

        &:hover {
            background-color: var(--color-brand-hover);
        }
    `,
    normal: css`
        color: var(--color-text-normal);
        background: var(--color-tab-normal);

        &:hover {
            background-color: var(--color-tab-hover);
        }
    `
};

const StyledTabButton = styled.div`
    border: 1px solid var(--color-border);
    text-transform: capitalize;
    text-align: center;
    padding: 1rem 0;
    font-size: 1.6rem;
    
    &:hover {
        cursor: pointer;
    }

    ${props => {
        if (props.selected) {
            return tabButtonVariation['selected'];
        }

        return tabButtonVariation['normal'];
    }}
`;

StyledTabButton.defaultProps = {
    variation: "normal"
}

function TabButton({text, selected, onClick}) {
    return (
        <StyledTabButton selected={selected} onClick={onClick}>
            {text}
        </StyledTabButton>
    );
}

export default TabButton;