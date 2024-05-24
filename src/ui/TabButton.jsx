import styled, {css} from "styled-components";
import BaseButton from "./BaseButton";

const tabButtonVariation = {
    selected: css`
        color: whitesmoke;
        background-color: #0b69ff;

        &:hover {
            background-color: #0a48ff;
        }
    `,
    normal: css`
        color: #252c51;
        background: #f3f4f7;

        &:hover {
            background-color: #c0c1c3;
        }
    `
};

const StyledTabButton = styled(BaseButton)`
    border: 1px solid lightgrey;
    border-radius: 0;
    text-transform: capitalize;

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
        <StyledTabButton size={"fullWidth"} selected={selected} onClick={onClick}>
            {text}
        </StyledTabButton>
    );
}

export default TabButton;